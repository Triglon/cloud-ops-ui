import { Box, Button, Grid, Typography } from '@mui/material';
import CoreApi from '../../../api/CoreApi';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';

export const GithubSuccessView = () => {
  useEffect(() => {
    window.close();
  });

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
      <Grid item xs={3}>
        <Typography sx={{ m: 1 }} variant="h4">
          Success
        </Typography>
      </Grid>
    </Grid>
  );
};
