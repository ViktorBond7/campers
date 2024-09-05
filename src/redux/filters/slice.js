import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    loading: false,
    error: null,
    vehicleEquipment: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      state.location = action.payload;
    },
    changeVehicle: (state, action) => {
      if (!state.vehicleEquipment.find((item) => item === action.payload)) {
        state.vehicleEquipment.push(action.payload);
      }
    },
  },
});

export const { changeFilter, changeVehicle } = filterSlice.actions;
export default filterSlice.reducer;
