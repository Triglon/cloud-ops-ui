import { createSlice } from '@reduxjs/toolkit';

export const repoConnectionSlice = createSlice({
  name: 'repositoryConnection',
  initialState: {
    initialized: false,
    list: []
  },
  reducers: {
    setList: (state, action) => {
      return { ...state, list: action.payload, initialized: true };
    }
  }
});

export default repoConnectionSlice.reducer;
export const repoConnectionActions = repoConnectionSlice.actions;
