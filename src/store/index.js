import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from "./reducers/customizationReducer";

export default configureStore({
  reducer: {
    customization: customizationReducer,
}
})
