// project imports
import config from 'config';
import { createSlice } from '@reduxjs/toolkit'

export const customizationSlice = createSlice({
  name: 'customization',
  initialState: {
    isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
  },
  reducers: {
    menuOpen: (state, action) => {
      localStorage.setItem('company', action.payload.id)
      const id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    },
    setMenu: (state, action) => {
      return {
        ...state,
        opened: action.opened
      };
    },
    setFontFamily: (state, action) => {
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    },
    setBorderRadius: (state, action) => {
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    }
  },
})

export default customizationSlice.reducer
export const customizationActions = customizationSlice.actions
