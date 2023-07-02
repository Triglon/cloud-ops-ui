import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    initialized: false,
    data: null
  },
  reducers: {
    setProject: (state, action) => {
      localStorage.setItem('projectId', action.payload?.id);
      return { ...state, data: action.payload, initialized: true };
    },
    setInitialized: (state, action) => {
      return { ...state, initialized: action.payload };
    }
  }
});

export default projectSlice.reducer;
export const projectActions = projectSlice.actions;
