import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes, { PublicRoutes } from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { AuthProvider } from './contexts/auth-context';
import MainRoutes from './routes/MainRoutes';
import AuthenticationRoutes from './routes/AuthenticationRoutes';

// ==============================|| APP ||============================== //

function Fragment() {
  return null;
}

const App = () => {
  const customization = useSelector((state) => state.customization);
  const auth = useSelector((state) => state.auth);

  const loadPage = () => {
    if (auth.isLoading) {
      return <PublicRoutes />;
    } else {
      return <Routes />;
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <AuthProvider>{loadPage()}</AuthProvider>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
