import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import playlistSlice from "./playlistSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    playlist: playlistSlice,
  },
});

export default store;
