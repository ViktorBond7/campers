import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

export const selectError = (state) => state.campers.error;
export const selectCampers = (state) => state.campers.items;

const contactSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = true;
        state.error = true;
      }),
});

export default contactSlice.reducer;
