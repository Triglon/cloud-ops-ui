import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

export const FormikTextInput = ({ formik, id, name, type, label }) => {
  const theme = useTheme();

  return (
    <FormControl fullWidth error={Boolean(formik.touched[name] && formik.errors[name])} sx={{ ...theme.typography.customInput }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        value={formik.values[name]}
        name={name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        label={label}
        inputProps={{}}
      />
      {formik.touched[name] && formik.errors[name] && (
        <FormHelperText error id={`standard-weight-helper-text-${id || name}`}>
          {formik.errors[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormikTextInput.propTypes = {
  formik: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
