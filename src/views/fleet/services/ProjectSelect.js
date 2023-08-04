import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CoreApi from '../../../api/CoreApi';
import { repoConnectionActions } from '../../../store/reducers/repoConnectionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Snackbar } from '@mui/material';
import { gridSpacing } from '../../../store/constant';
import { cloudAccountActions } from '../../../store/reducers/cloudAccountReducer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormikTextInput } from '../../utilities/FormikTextInput';
import { LoadingButton } from '@mui/lab';
import MuiAlert from '@mui/material/Alert';
import NotificationBar from '../../utilities/NotificationBar';
import { projectActions } from '../../../store/reducers/projectReducer';
import { AwsAccountSelect } from './AwsAccountSelect';

export const ProjectSelect = ({ onChange }) => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.project.list);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [openAddProject, setOpenAddProject] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState({
    message: '',
    severity: 'warning'
  });

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };

  const handleClickOpen = () => {
    setOpenAddProject(true);
  };

  const updateProjectList = async () => {
    setIsLoadingProjects(true);
    const projects = await CoreApi.getProjects();
    setIsLoadingProjects(false);
    dispatch(projectActions.setList(projects.data.results));
  };

  useEffect(() => {
    updateProjectList().then();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      account: '',
      region: 'us-east-1'
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required('Name is required'),
      account: Yup.string().max(255).required('Account is required'),
      region: Yup.string().max(255).required('Region ID is required')
    }),
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      console.log(values);
      const resp = await CoreApi.createProject(values.name, values.account, values.region);

      if (resp?.success) {
        setSnackMessage({ message: 'Project creation success', severity: 'success' });
        setOpenSnack(true);
        await updateProjectList();
        handleClose();
      } else {
        formik.setErrors(resp.errors);
        setSnackMessage({ message: 'Project creation error', severity: 'error' });
        setOpenSnack(true);
      }
      helpers.setSubmitting(false);
    }
  });

  const handleClose = () => {
    setOpenAddProject(false);
  };

  const handleAccountChange = (formik, value) => {
    console.log(value);
    formik.setFieldValue('account', value?.id);
  };

  const handleChange = () => {};

  return (
    <Grid container direction="row" spacing={gridSpacing}>
      <Grid item xs={2}>
        <Autocomplete
          disablePortal
          options={projectList}
          disabled={!projectList.length}
          sx={{ width: 300 }}
          onChange={(event, value) => onChange(value)}
          renderInput={(params) => <TextField {...params} label={isLoadingProjects ? <CircularProgress size="1rem" /> : 'Project'} />}
          PaperComponent={({ children }) => {
            return (
              <Paper>
                <Button
                  color="primary"
                  fullWidth
                  sx={{ justifyContent: 'flex-start', pl: 2 }}
                  onMouseDown={() => {
                    handleClickOpen();
                  }}
                >
                  + Add New
                </Button>
                {children}
              </Paper>
            );
          }}
        />
      </Grid>
      <Dialog
        style={{ minHeight: '50vh', alignItems: 'center' }}
        open={openAddProject}
        onClose={handleClose}
        fullWidth={true}
        sx={{ height: '90vv' }}
      >
        <DialogTitle>Project Details</DialogTitle>
        <DialogContent style={{ minHeight: '50vh', alignItems: 'center' }}>
          <form onSubmit={formik.handleSubmit}>
            <FormikTextInput formik={formik} name="name" type={'text'} label={'Name'} />
            <AwsAccountSelect onChange={(value) => handleAccountChange(formik, value)} />
            <FormikTextInput formik={formik} name="region" type={'text'} label={'Region'} />

            <Button onClick={handleClose}>Cancel</Button>
            <LoadingButton loading={formik.isSubmitting} disabled={formik.isSubmitting} type="submit">
              Create
            </LoadingButton>
          </form>
        </DialogContent>
      </Dialog>

      <NotificationBar message={snackMessage.message} severity={snackMessage.severity} open={openSnack} handleClose={handleCloseSnack} />
    </Grid>
  );
};

ProjectSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};
