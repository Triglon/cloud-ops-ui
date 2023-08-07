import { useEffect, useState } from 'react';

// material-ui
import { Divider, FormControl, FormHelperText, Grid, Typography } from '@mui/material';

import { gridSpacing } from 'store/constant';
import { RepositorySelect } from './RepositorySelect';
import Header from '../../../layout/MainLayout/Header';
import { AwsAccountSelect } from './AwsAccountSelect';
import { Box } from '@mui/system';

import React from 'react';
import { makeStyles } from '@mui/material';
import { ProjectSelect } from './ProjectSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CoreApi from '../../../api/CoreApi';
import { LoadingButton } from '@mui/lab';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Services = () => {
  const [isLoading, setLoading] = useState(true);
  const [repository, setRepository] = useState(true);
  const [cloudAccount, setCloudAccount] = useState(true);
  const [project, setProject] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const formik = useFormik({
    initialValues: {
      project: '',
      repository_connection: '',
      repository_branch: '',
      repository_name: ''
    },
    validationSchema: Yup.object({
      project: Yup.string().max(255).required('Please select project'),
      repository_connection: Yup.string().max(255).required('Please select connection'),
      repository_branch: Yup.string().max(255).required('Please select branch'),
      repository_name: Yup.string().max(255).required('Please select repository')
    }),

    onSubmit: async (values, helpers) => {
      console.log(values);
      // helpers.setSubmitting(true);
      // const resp = await CoreApi.createCloudAccount(values.alias, values.account_id, values.access_key_id, values.secret_access_key);
      //
      // if (resp?.success) {
      //   setSnackMessage({ message: 'Account creation success', severity: 'success' });
      //   setOpenSnack(true);
      //   await updateAccountList();
      //   handleClose();
      // } else {
      //   formik.setErrors(resp.errors);
      //   setSnackMessage({ message: 'Account creation error', severity: 'error' });
      //   setOpenSnack(true);
      // }
      // helpers.setSubmitting(false);
    }
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Typography>Project</Typography>
          <Divider sx={{ borderColor: 'primary.main' }}></Divider>
        </Grid>
        <Grid item xs={12}>
          <FormControl error={Boolean(formik.touched.project && formik.errors.project)}>
            <ProjectSelect onChange={(value) => formik.setFieldValue('project', value.id)} />
            <FormHelperText error>{formik.errors.project}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography>Repository</Typography>
          <Divider sx={{ borderColor: 'primary.main' }}></Divider>
        </Grid>
        <Grid item xs={12}>
          <FormControl error={Boolean(formik.touched.project && formik.errors.project)}>
            <RepositorySelect
              onBranchChange={(value) => formik.setFieldValue('repository_branch', value?.name)}
              branchError={formik.errors.repository_branch}
              onConnectionChange={(value) => formik.setFieldValue('repository_connection', value?.id)}
              connectionError={formik.errors.repository_connection}
              onRepositoryChange={(value) => formik.setFieldValue('repository_name', value?.value)}
              repositoryError={formik.errors.repository_name}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton loading={formik.isSubmitting} type={'submit'} variant={'contained'}>
            Create
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Services;
