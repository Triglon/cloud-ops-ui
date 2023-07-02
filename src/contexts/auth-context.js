import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import CoreApi from '../api/CoreApi';
import { useDispatch, useSelector } from 'react-redux';
import { companyActions } from '../store/reducers/companyReducer';
import { authActions } from '../store/reducers/authReducer';
import { profileActions } from '../store/reducers/profileReducer';
import { cloudAccountActions } from '../store/reducers/cloudAccountReducer';
import { projectActions } from '../store/reducers/projectReducer';

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const initialized = useRef(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const initialize = async () => {
    console.log('AuthProvider');

    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    try {
      const profile = await CoreApi.getProfile();

      if (profile?.data?.id) {
        dispatch(profileActions.updateProfile(profile.data));
        //
        // TODO: allow company switching
        dispatch(companyActions.setCompany(profile.data.companies[0]));

        dispatch(authActions.login());

        const cloudAccounts = await CoreApi.getCloudAccounts();
        dispatch(cloudAccountActions.setList(cloudAccounts.data.results));

        const projects = cloudAccounts.data.results.reduce((projects, obj) => {
          return projects.concat(obj.projects);
        }, []);
        if (projects.length) {
          dispatch(projectActions.setProject(projects[0]));
        } else {
          dispatch(projectActions.setInitialized(false));
        }
      } else {
        dispatch(authActions.logout());
      }
    } catch (err) {
      console.error(err);
      dispatch(authActions.logout());
    }
  };

  useEffect(() => {
    initialize().catch(console.error);
  }, []);

  const signIn = (user) => {
    dispatch(authActions.login());
  };

  const signOut = () => {
    dispatch(authActions.logout());
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
