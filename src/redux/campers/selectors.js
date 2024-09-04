import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "./campersSlice";
import { selectLocationFilter } from "../filters/selectors";

export const selectFilteredLocation = createSelector(
  [selectCampers, selectLocationFilter],
  (campers, filter) => {
    const filteredContacts = campers.filter((camper) =>
      camper.location.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
);
