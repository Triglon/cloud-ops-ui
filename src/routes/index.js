import { useRoutes, Navigate } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { useSelector } from 'react-redux';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleRouteRender = ({ element, isPublic }) => {
    if (isPublic || isAuthenticated) {
      return element;
    } else {
      return <Navigate to="/login" replace />;
    }
  };

  return useRoutes([
    { ...MainRoutes, element: handleRouteRender(MainRoutes) },
    { ...AuthenticationRoutes, element: handleRouteRender(AuthenticationRoutes) }
  ]);
}
