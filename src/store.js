import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./ReduxSlices/specialitySlice";

export const store = configureStore({
  reducer: {
    speciality: specialityReducer,
  },
});
