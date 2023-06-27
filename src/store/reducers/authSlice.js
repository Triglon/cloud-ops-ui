import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      return { ...state, ...{ isAuthenticated: true } }
    },
    logout: (state) => {
      localStorage.removeItem('token')
      localStorage.removeItem('company')
      return { ...state, ...{ isAuthenticated: false } }
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
