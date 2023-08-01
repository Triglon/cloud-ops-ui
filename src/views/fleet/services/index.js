import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

import { gridSpacing } from 'store/constant';
import { RepositorySelect } from './RepositorySelect';
import Header from '../../../layout/MainLayout/Header';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Services = () => {
  const [isLoading, setLoading] = useState(true);
  const [repository, setRepository] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log(repository);
  });

  return (
    <Grid container spacing={gridSpacing}>
      <RepositorySelect onChange={(value) => setRepository(value)} />
      <Grid item>
        <Typography>test {repository?.label}</Typography>
      </Grid>
    </Grid>
  );
};

export default Services;
