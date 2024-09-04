import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    loading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
