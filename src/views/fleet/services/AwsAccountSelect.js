import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CoreApi from '../../../api/CoreApi';
import { repoConnectionActions } from '../../../store/reducers/repoConnectionReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Skeleton
} from '@mui/material';
import { gridSpacing } from '../../../store/constant';
import { cloudAccountActions } from '../../../store/reducers/cloudAccountReducer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../../utils/login';
import { useTheme } from '@mui/material/styles';
import AnimateButton from '../../../ui-component/extended/AnimateButton';
import { FormikTextInput } from '../../utilities/FormikTextInput';
import { LoadingButton } from '@mui/lab';

export const AwsAccountSelect = ({ onChange }) => {
  const dispatch = useDispatch();
  const accountList = useSelector((state) => state.cloudAccount.list);
  const [isLoadingAccounts, setIsLoadingAccounts] = useState(true);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      accountId: '',
      accessKeyId: '',
      secretAccessKey: ''
    },
    validationSchema: Yup.object({
      alias: Yup.string().max(255).required('Alias is required'),
      accountId: Yup.string().max(255).required('Account ID is required'),
      accessKeyId: Yup.string().max(255).required('Access Key ID is required'),
      secretAccessKey: Yup.string().max(255).required('Secret Access Key is required')
    }),
    onSubmit: async (values, helpers) => {
      helpers.setSubmitting(true);
      const resp = await CoreApi.createCloudAccount(values.alias, values.accountId, values.accessKeyId, values.secretAccessKey);

      if (resp?.success) {
        await updateAccountList();
        handleClose();
      } else {
        formik.setErrors(resp.errors);
      }
      helpers.setSubmitting(false);
    }
  });

  return (
    <Grid container direction="row" spacing={gridSpacing}>
      <Grid item xs={2}>
        <Autocomplete
          disablePortal
          options={accountList}
          disabled={!accountList.length}
          sx={{ width: 300 }}
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
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <FormikTextInput formik={formik} name="alias" type={'text'} label={'Alias'} />
            <FormikTextInput formik={formik} name="accountId" type={'text'} label={'Account ID'} />
            <FormikTextInput formik={formik} name="accessKeyId" type={'password'} label={'Access Key ID'} />
            <FormikTextInput formik={formik} name="secretAccessKey" type={'password'} label={'Secret Access Key'} />

            <Button onClick={handleClose}>Cancel</Button>
            <LoadingButton loading={formik.isSubmitting} disabled={formik.isSubmitting} type="submit">
              Create
            </LoadingButton>
          </form>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

AwsAccountSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};
