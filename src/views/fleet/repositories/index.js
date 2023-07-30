import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import CoreApi from '../../../api/CoreApi';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import { repoConnectionActions } from '../../../store/reducers/repoConnectionReducer';

export const RepositoriesView = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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
        console.log(data);
        setLoading(false);

        const res = await CoreApi.getRepoConnections();
        dispatch(repoConnectionActions.setList(res.data));
        // TODO: check the pages here
      }
    }, 500);
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Repositories
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={openFB}>
            Connect Github
          </Button>
        </Box>
      </Box>
      {loading && (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
          <Grid item xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
