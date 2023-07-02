import { createSlice } from '@reduxjs/toolkit';

export const cloudAccountSlice = createSlice({
  name: 'cloudAccount',
  initialState: {
    list: []
  },
  reducers: {
    setList: (state, action) => {
      return { ...state, ...{ list: action.payload } };
    }
  }
});

export default cloudAccountSlice.reducer;
export const cloudAccountActions = cloudAccountSlice.actions;
