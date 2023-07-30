import { Box, Button, FormControl, Grid, InputLabel, Menu, MenuItem, Select, Typography } from '@mui/material';
import CoreApi from '../../../api/CoreApi';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { repoConnectionActions } from '../../../store/reducers/repoConnectionReducer';
import { gridSpacing } from '../../../store/constant';
import PipelineEnvCard from '../pipeline/PipelineEnvCard';
import PipelineStageCard from '../pipeline/PipelineStageCard';
import RepoConnectionCard from './RepoConnectionCard';

export const RepositoriesView = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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
        setLoading(true);

        const uid = localStorage.getItem('uid');
        const repoConnectionId = localStorage.getItem('repoConnectionId');
        localStorage.removeItem('uid');
        localStorage.removeItem('repoConnectionId');
        const data = await CoreApi.updateRepoConnection(repoConnectionId, uid);
        // const urlParams = new URLSearchParams(platformWindow.location.search);
        // let uid = urlParams.get('uid');
        setLoading(false);

        const res = await CoreApi.getRepoConnections();
        dispatch(repoConnectionActions.setList(res.data.results));
      }
    }, 500);
  };

  useEffect(() => {
    CoreApi.getRepoConnections().then((res) => {
      dispatch(repoConnectionActions.setList(res.data.results));
    });
  }, []);

  const getSkeleton = () => {
    return (
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <PipelineEnvCard isLoading={true} />

            <Box sx={{ pt: 2 }}>
              <PipelineStageCard isLoading={true} />
            </Box>
            <Box sx={{ pt: 2 }}>
              <PipelineStageCard isLoading={true} />
            </Box>
            <Box sx={{ pt: 2 }}>
              <PipelineStageCard isLoading={true} />
            </Box>
          </Grid>
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
        <Grid item xs={12} sx={{ pt: 2 }}>
          <Grid container spacing={gridSpacing} columns={{ xs: 4, sm: 8, md: 12 }}>
            {connectionList.map((data) => (
              <Grid item xs={4} key={`repo-connection-${data.id}`}>
                <RepoConnectionCard data={data} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
