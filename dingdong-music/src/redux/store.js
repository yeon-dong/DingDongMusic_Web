import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import playlistSlice from "./playlistSlice";
import playingMusicSlice from "./playingMusicSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    playlist: playlistSlice,
    playingMusic: playingMusicSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
