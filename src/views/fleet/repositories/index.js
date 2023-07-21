import { Box, Button, Typography } from '@mui/material';
import CoreApi from '../../../api/CoreApi';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';

export const RepositoriesView = (props) => {
  const dispatch = useDispatch();

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

    var timer = setInterval(async function () {
      if (platformWindow.closed) {
        clearInterval(timer);
        // const res = await CoreApi.getSocialPages();
        // dispatch(setSocialPages(res.data));
        // // TODO: check the pages here
        // dispatch(
        //   setPlatforms([
        //     {
        //       id: uuid(),
        //       createdAt: '27/03/2019',
        //       origin: 'facebook',
        //       name: 'Lassie & Laddie',
        //       media: '/static/images/platforms/facebook.png',
        //       description: 'Connect Your Facebook Page',
        //       followers: '44k'
        //     }
        //   ])
        // );
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
    </Box>
  );
};
