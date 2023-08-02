import { useEffect, useState } from 'react';

// material-ui
import { Divider, Grid, Typography } from '@mui/material';

import { gridSpacing } from 'store/constant';
import { RepositorySelect } from './RepositorySelect';
import Header from '../../../layout/MainLayout/Header';
import { AwsAccountSelect } from './AwsAccountSelect';
import { Box } from '@mui/system';

import React from 'react';
import { makeStyles } from '@mui/material';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Services = () => {
  const [isLoading, setLoading] = useState(true);
  const [repository, setRepository] = useState(true);
  const [cloudAccount, setCloudAccount] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(repository);
  });

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Typography>AWS Account</Typography>
        <Divider sx={{ borderColor: 'primary.main' }}></Divider>
      </Grid>
      <Grid item xs={12}>
        <AwsAccountSelect onChange={(value) => setCloudAccount(value)} />
      </Grid>

      <Grid item xs={12}>
        <Typography>Project</Typography>
        <Divider sx={{ borderColor: 'primary.main' }}></Divider>
      </Grid>
      <Grid item xs={12}>
        <RepositorySelect onChange={(value) => setRepository(value)} />
      </Grid>
    </Grid>
  );
};

export default Services;
