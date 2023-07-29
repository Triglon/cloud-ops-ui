import { createSlice } from '@reduxjs/toolkit';

export const repoConnectionSlice = createSlice({
  name: 'repositoryConnection',
  initialState: {
    initialized: false,
    data: null
  },
  reducers: {
    setList: (state, action) => {
      return { ...state, data: action.payload, initialized: true };
    }
  }
});

export default repoConnectionSlice.reducer;
export const repoConnectionActions = repoConnectionSlice.actions;
