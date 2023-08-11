import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import CoreApi from '../../../api/CoreApi';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';

export const RepoConnectionSuccessView = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    localStorage.setItem('uid', urlParams.get('uid'));
    localStorage.setItem('repoConnectionId', urlParams.get('connection'));

    window.close();
  });

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
