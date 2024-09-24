import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import playlistSlice from "./playlistSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    playlist: playlistSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
