import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

export const selectError = (state) => state.campers.error;
export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectPage = (state) => state.campers.page;

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    hasMore: true,
    page: 1,
  },

  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        const newItems = action.payload;

        state.items = [
          ...state.items,
          ...newItems.filter(
            (item) =>
              !state.items.some((existingItem) => existingItem._id === item._id)
          ),
        ];

        if (action.payload.length < 4) {
          state.hasMore = false;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage } = campersSlice.actions;

export default campersSlice.reducer;
