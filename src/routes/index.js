import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function AppRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes]);
}

export function PublicRoutes() {
  return useRoutes([AuthenticationRoutes]);
}
