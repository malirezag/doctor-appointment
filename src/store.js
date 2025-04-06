import { configureStore } from "@reduxjs/toolkit";
import specialityReducer from "./ReduxSlices/specialitySlice";
import searchDoctorsReducer from "./ReduxSlices/searchDoctorsSlice";

export const store = configureStore({
  reducer: {
    speciality: specialityReducer,
    SearchDoctors: searchDoctorsReducer,
  },
});
