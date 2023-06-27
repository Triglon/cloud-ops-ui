import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from "./reducers/customizationReducer";
import authReducer from "./reducers/authReducer";

export default configureStore({
  reducer: {
    customization: customizationReducer,
    auth: authReducer
}
})
