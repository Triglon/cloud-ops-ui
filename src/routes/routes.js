export const AppRoutes = {
  root: '/',
  login: '/login',
  register: '/register',
  privacyPolicy: 'privacy-policy'
};

const PUBLIC_PATHS = [AppRoutes.login, AppRoutes.register, AppRoutes.privacyPolicy];

export const redirectIfUnauthorized = () => {
  if (!PUBLIC_PATHS.includes(window.location.pathname)) {
    window.location.href = AppRoutes.login;
  }
};
