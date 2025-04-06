import { createSlice } from "@reduxjs/toolkit";

const searchDoctorsSlice = createSlice({
  name: "searchDoctors",
  initialState: { doctorName: null },
  reducers: {
    setDoctorName: (state, action) => {
      state.doctorName = action.payload;
    },
  },
});

export const { setDoctorName } = searchDoctorsSlice.actions;

export default searchDoctorsSlice.reducer;
