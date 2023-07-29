import { configureStore } from '@reduxjs/toolkit';
import customization from './reducers/customizationReducer';
import auth from './reducers/authReducer';
import profile from './reducers/profileReducer';
import company from './reducers/companyReducer';
import cloudAccount from './reducers/cloudAccountReducer';
import project from './reducers/projectReducer';
import repoConnection from './reducers/repoConnectionReducer';

export default configureStore({
  reducer: {
    customization,
    auth,
    profile,
    company,
    cloudAccount,
    project,
    repoConnection
  }
});
