import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAlbums: 0,
  totalAmount: 0,
  selectedIndex: -1,
};

const playlistSlice = createSlice({
  name: "playlistCart",
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      state.items.push({ ...action.payload, amount: 1 });
    },
    removePlaylist: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    calculateTotals: (state) => {
      let totalAlbums = 0;
      let totalAmount = 0;

      state.items.forEach((item) => {
        totalAlbums += item.amount;
        totalAmount += item.amount * item.price;
      });
      state.totalAlbums = totalAlbums;
      state.totalAmount = totalAmount;
    },
    setSelectedIndex: (state, action) => {
      if (typeof action.payload === "number") {
        state.selectedIndex = action.payload;
      } else {
        state.selectedIndex = state.items.length - 1;
      }
    },
  },
});

export const {
  addPlaylist,
  removePlaylist,
  calculateTotals,
  setSelectedIndex,
} = playlistSlice.actions;
export default playlistSlice.reducer;
