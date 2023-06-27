import { configureStore } from '@reduxjs/toolkit';
import customization from './reducers/customizationReducer';
import auth from './reducers/authReducer';
import profile from './reducers/profileReducer';
import company from './reducers/companyReducer';

export default configureStore({
  reducer: {
    customization,
    auth,
    profile,
    company
  }
});
