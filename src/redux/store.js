import { configureStore } from "@reduxjs/toolkit";
import campersSlice from "./campersSlice";

export const store = configureStore({
  reducer: {
    campers: campersSlice,
  },
});
