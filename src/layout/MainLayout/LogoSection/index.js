import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { customizationActions } from '../../../store/reducers/customizationReducer';
import { Box } from '@mui/material';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      onClick={() => dispatch(customizationActions.menuOpen({ id: defaultId }))}
      component={Link}
      to={config.defaultPath}
    >
      <Box>
        <Logo></Logo>
        {/*<img*/}
        {/*  src={'https://main-media-public.s3.amazonaws.com/triglon/logo_landscape_for_light_bg.png'}*/}
        {/*  style={{ height: '30%', width: '30%' }}*/}
        {/*  alt={'triglon'}*/}
        {/*/>*/}
      </Box>
      {/*<img*/}
      {/*  src={'https://main-media-public.s3.amazonaws.com/triglon/logo_landscape_for_light_bg.png'}*/}
      {/*  style={{ height: '30%', width: '30%' }}*/}
      {/*  alt={'triglon'}*/}
      {/*/>*/}
    </ButtonBase>
  );
};

export default LogoSection;
