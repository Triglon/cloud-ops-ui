import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    stats: {}
  },
  reducers: {
    setCompany: (state, action) => {
      localStorage.setItem('company', action.payload?.id);
      return { ...state, ...action.payload };
    },
    setCompanyStats: (state, action) => {
      return { ...state, ...{ stats: action.payload } };
    }
  }
});

export default companySlice.reducer;
export const companyActions = companySlice.actions;
