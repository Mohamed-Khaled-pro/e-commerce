import { createSlice } from "@reduxjs/toolkit";

const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

const initialState = {
  items: savedFavourites,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("favourites", JSON.stringify(state.items));
      }
    },
    removeFavourite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("favourites", JSON.stringify(state.items));
    },
    toggleFavourite: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("favourites", JSON.stringify(state.items));
    },
    clearFavourites: (state) => {
      state.items = [];
      localStorage.setItem("favourites", JSON.stringify(state.items));
    },
  },
});

export const {
  addFavourite,
  removeFavourite,
  toggleFavourite,
  clearFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
