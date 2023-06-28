import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: true
  },
  reducers: {
    login: (state) => {
      return { ...state, ...{ isAuthenticated: true, isLoading: false } };
    },
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('company');
      return { ...state, ...{ isAuthenticated: false } };
    }
  }
});

export const authActions = authReducer.actions;

export default authReducer.reducer;
