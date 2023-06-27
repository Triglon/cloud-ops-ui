import { useRoutes, Navigate } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { useSelector } from 'react-redux';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const handleRouteRender = ({ element, isPublic }) => {
    const token = localStorage.getItem('token');

    const isAuthenticated = !!token;
    console.log(isAuthenticated);
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
