import { Box, Button, FormControl, Grid, InputLabel, Menu, MenuItem, Select, Typography } from '@mui/material';
import CoreApi from '../../../api/CoreApi';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { repoConnectionActions } from '../../../store/reducers/repoConnectionReducer';
import { gridSpacing } from '../../../store/constant';
import RepoConnectionCard from './RepoConnectionCard';

export const RepositoriesView = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const connectionList = useSelector((state) => state.repoConnection.list || []);

  const openFB = async () => {
    const urlData = await CoreApi.getGithubLoginUrl();
    const w = 600;
    const h = 400;

    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const platformWindow = window.open(
      urlData.data.url,
      'Connect Facebook',
      `
      scrollbars=yes,
      width=${w / systemZoom},
      height=${h / systemZoom},
      top=${top},
      left=${left}
      `
    );

    const timer = setInterval(async function () {
      if (platformWindow.closed) {
        clearInterval(timer);
        setIsLoading(true);

        const uid = localStorage.getItem('uid');
        const repoConnectionId = localStorage.getItem('repoConnectionId');
        localStorage.removeItem('uid');
        localStorage.removeItem('repoConnectionId');
        const data = await CoreApi.updateRepoConnection(repoConnectionId, uid);
        // const urlParams = new URLSearchParams(platformWindow.location.search);
        // let uid = urlParams.get('uid');
        setIsLoading(false);

        const res = await CoreApi.getRepoConnections();
        dispatch(repoConnectionActions.setList(res.data.results));
      }
    }, 500);
  };

  useEffect(() => {
    setIsLoading(true);
    CoreApi.getRepoConnections().then((res) => {
      dispatch(repoConnectionActions.setList(res.data.results));
      setIsLoading(false);
    });
  }, []);

  const getSkeleton = () => {
    return (
      <Grid item xs={12} sx={{ pt: 2 }}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={3}>
            <RepoConnectionCard isLoading={true} />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const getDisplay = () => {
    if (isLoading) return getSkeleton();
    return (
      <Grid item xs={12} sx={{ pt: 2 }}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          {connectionList.map((data) => (
            <Grid item xs={3} key={`repo-connection-${data.id}`}>
              <RepoConnectionCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} justifyContent="flex-end">
          <Grid item xs={2}>
            <FormControl fullWidth>
              <Button color="primary" variant="contained" onClick={openFB}>
                Connect Github
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        {getDisplay()}
      </Grid>
    </Grid>
  );
};
