import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicName: "",
  artistName: "",
  musicImgSrc: "",
  isPlaying: false,
};

const playingMusicSlice = createSlice({
  name: "playingMusic",
  initialState,
  reducers: {
    setPlayingMusic: (state, action) => {
      const { musicName, artistName, musicImgSrc } = action.payload;

      state.musicName = musicName;
      state.artistName = artistName;
      state.musicImgSrc = musicImgSrc;
    },
    setIsPlaying: (state) => {
      state.isPlaying = true;
    },
    setPause: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setPlayingMusic, setIsPlaying, setPause } =
  playingMusicSlice.actions;
export default playingMusicSlice.reducer;

export const resetMusic = () => (dispatch) => {
  dispatch(setPause());
  setTimeout(() => {
    dispatch(setIsPlaying());
  }, 500);
};
