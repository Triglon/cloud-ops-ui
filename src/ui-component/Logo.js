// material-ui
import { useTheme } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LogoSvg from '../logo_landscape_for_light_bg.svg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const S3SvgIcon = ({ url }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await axios.get(url);
        setSvgContent(response.data);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    loadSvg();
  }, [url]);

  if (!svgContent) {
    return null; // Render nothing until the SVG content is loaded
  }

  console.log(svgContent);
  return <SvgIcon>{svgContent}</SvgIcon>;
};

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <img style={{ height: 64, width: 128 }} src={LogoSvg} alt={'triglon'}></img>
  );
};

export default Logo;
