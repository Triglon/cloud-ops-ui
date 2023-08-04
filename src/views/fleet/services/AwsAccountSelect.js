import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CoreApi from '../../../api/CoreApi';
import { repoConnectionActions } from '../../../store/reducers/repoConnectionReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Snackbar } from '@mui/material';
import { gridSpacing } from '../../../store/constant';
import { cloudAccountActions } from '../../../store/reducers/cloudAccountReducer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormikTextInput } from '../../utilities/FormikTextInput';
import { LoadingButton } from '@mui/lab';
import MuiAlert from '@mui/material/Alert';
import NotificationBar from '../../utilities/NotificationBar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AwsAccountSelect = ({ onChange }) => {
  const dispatch = useDispatch();
  const accountList = useSelector((state) => state.cloudAccount.list);
  const [isLoadingAccounts, setIsLoadingAccounts] = useState(true);
  const [openAddAccount, setOpenAddAccount] = React.useState(false);
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
    setOpenAddAccount(true);
  };

  useEffect(() => {
    setIsLoadingAccounts(true);
    CoreApi.getRepoConnections().then((res) => {
      dispatch(repoConnectionActions.setList(res.data.results));
      setIsLoadingAccounts(false);
    });
  }, []);

  const updateAccountList = async () => {
    setIsLoadingAccounts(true);
    const cloudAccounts = await CoreApi.getCloudAccounts();
    setIsLoadingAccounts(false);
    dispatch(cloudAccountActions.setList(cloudAccounts.data.results));
  };

  const formik = useFormik({
    initialValues: {
      alias: '',
      account_id: '',
      access_key_id: '',
      secret_access_key: ''
    },
    validationSchema: Yup.object({
      alias: Yup.string().max(255).required('Alias is required'),
      account_id: Yup.string().max(255).required('Account ID is required'),
      access_key_id: Yup.string().max(255).required('Access Key ID is required'),
      secret_access_key: Yup.string().max(255).required('Secret Access Key is required')
    }),
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      const resp = await CoreApi.createCloudAccount(values.alias, values.account_id, values.access_key_id, values.secret_access_key);

      if (resp?.success) {
        setSnackMessage({ message: 'Account creation success', severity: 'success' });
        setOpenSnack(true);
        await updateAccountList();
        handleClose();
      } else {
        formik.setErrors(resp.errors);
        setSnackMessage({ message: 'Account creation error', severity: 'error' });
        setOpenSnack(true);
      }
      helpers.setSubmitting(false);
    }
  });

  const handleClose = () => {
    setOpenAddAccount(false);
  };

  return (
    <Box>
      <Autocomplete
        disablePortal
        fullWidth={true}
        options={accountList}
        disabled={!accountList.length}
        onChange={(event, value) => onChange(value)}
        renderInput={(params) => <TextField {...params} label={isLoadingAccounts ? <CircularProgress size="1rem" /> : 'Cloud Account'} />}
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
      <Dialog open={openAddAccount} onClose={handleClose}>
        <DialogTitle>Cloud Account</DialogTitle>
        <DialogContent>
          <DialogContentText>Add cloud account details for AWS</DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <FormikTextInput formik={formik} name="alias" type={'text'} label={'Alias'} />
            <FormikTextInput formik={formik} name="account_id" type={'text'} label={'Account ID'} />
            <FormikTextInput formik={formik} name="access_key_id" type={'password'} label={'Access Key ID'} />
            <FormikTextInput formik={formik} name="secret_access_key" type={'password'} label={'Secret Access Key'} />

            <Button onClick={handleClose}>Cancel</Button>
            <LoadingButton loading={formik.isSubmitting} disabled={formik.isSubmitting} type="submit">
              Create
            </LoadingButton>
          </form>
        </DialogContent>
      </Dialog>

      <NotificationBar message={snackMessage.message} severity={snackMessage.severity} open={openSnack} handleClose={handleCloseSnack} />
    </Box>
  );
};

AwsAccountSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};
