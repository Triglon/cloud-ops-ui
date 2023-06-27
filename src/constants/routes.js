export const LOGIN = '/login';
export const REGISTER = '/register';
export const PRIVACY = '/privacy-policy';
export const ROOT = '/';
export const PUBLIC_PATHS = [LOGIN, REGISTER, PRIVACY];

export const redirectIfUnauthorized = () => {
  if (!PUBLIC_PATHS.includes(window.location.pathname)) {
    window.location.href = LOGIN;
  }
};
