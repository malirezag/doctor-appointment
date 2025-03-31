import { createSlice } from "@reduxjs/toolkit";

const specialitySlice = createSlice({
  name: "speciality",
  initialState: { speciality: null },
  reducers: {
    setSpeciality: (state, action) => {
      state.speciality = action.payload;
    },
  },
});

export const { setSpeciality } = specialitySlice.actions;

export default specialitySlice.reducer;
