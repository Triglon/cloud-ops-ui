import { useRoutes, Navigate } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const isLoggedIn = false; // Replace with your logic to determine if the user is logged in

  const handleRouteRender = ({ element, isPublic }) => {
    if (isPublic || isLoggedIn) {
      return element;
    } else {
      return <Navigate to="/login" replace />;
    }
  };

  return useRoutes([{ ...MainRoutes, element: handleRouteRender(MainRoutes) }, { ...AuthenticationRoutes, element: handleRouteRender(AuthenticationRoutes) }]);
}
