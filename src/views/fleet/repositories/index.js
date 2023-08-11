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
  const [reload, setReload] = useState(false);

  const openRepoConnection = async (provider) => {
    const urlData = await CoreApi.getRepoLoginUrl(provider);
    const w = 800;
    const h = 600;

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
        await CoreApi.updateRepoConnection(repoConnectionId, uid);

        // trigger reload
        setReload(!reload);
      }
    }, 500);
  };

  useEffect(() => {
    setIsLoading(true);
    CoreApi.getRepoConnections().then((res) => {
      dispatch(repoConnectionActions.setList(res.data.results));
      setIsLoading(false);
    });
  }, [reload]);

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
              <Button color="primary" variant="contained" onClick={() => openRepoConnection('github')}>
                Connect Github
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <Button color="primary" variant="contained" onClick={() => openRepoConnection('bitbucket')}>
                Connect Bitbucket
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        {getDisplay()}
      </Grid>
    </Grid>
  );
};
