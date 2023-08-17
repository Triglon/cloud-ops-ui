export const AppRoutes = {
  root: '/',
  login: '/login',
  register: '/register',
  privacyPolicy: 'privacy-policy',
  fleet: 'fleet/',
  overview: 'fleet/overview',
  pipeline: 'fleet/pipeline',
  services: 'fleet/services',
  repositories: 'fleet/repositories'
};

const PUBLIC_PATHS = [AppRoutes.login, AppRoutes.register, AppRoutes.privacyPolicy];

export const redirectIfUnauthorized = () => {
  if (!PUBLIC_PATHS.includes(window.location.pathname)) {
    window.location.href = AppRoutes.login;
  }
};
