import { createSlice } from "@reduxjs/toolkit";

const specialitySlice = createSlice({
  name: "speciality",
  initialState: { speciality: null, searchSpeciality: "", letterCounter: 0 },
  reducers: {
    setSpeciality: (state, action) => {
      state.speciality = action.payload;
    },
    searchSpeciality: (state, action) => {
      state.searchSpeciality = action.payload;
    },
    letterCount: (state, action) => {
      state.letterCounter = action.payload;
    },
  },
});

export const { setSpeciality } = specialitySlice.actions;
export const { searchSpeciality } = specialitySlice.actions;
export const { letterCount } = specialitySlice.actions;

export default specialitySlice.reducer;
