import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAlbums: 0,
  totalAmount: 0,
  selectedIndex: -1,
  selectedItem: 
    {
      musicName: "",
      artistName: "",
      musicImgSrc: "",
      isPlaying: false,
    }
  
};

const playlistSlice = createSlice({
  name: "playlistCart",
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      state.items.push({ ...action.payload, amount: 1 });
    },
    removePlaylist: (state, action) => {
      if (action.payload === state.selectedIndex) {
        if(state.selectedIndex + 1 === state.items.length){
          state.selectedIndex -= 1;
        }
      }
      else {
        if (action.payload < state.selectedIndex) state.selectedIndex -= 1;
      }
      state.items.splice(action.payload, 1);
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
    setPlayingMusic: (state, action) => {
      const { musicName, artistName, musicImgSrc } = action.payload;

      state.selectedItem.musicName = musicName;
      state.selectedItem.artistName = artistName;
      state.selectedItem.musicImgSrc = musicImgSrc;
    },
    setIsPlaying: (state) => {
      state.selectedItem.isPlaying = true;
    },
    setPause: (state) => {
      state.selectedItem.isPlaying = false;
    },
    resetSelectedItem: (state, action) => {
      const index = action.payload;
      
      if (typeof index === "number" && index >= 0 && index < state.items.length) {
        state.selectedItem = {
          musicName: state.items[index].musicName,
          artistName: state.items[index].artistName,
          musicImgSrc: state.items[index].musicImgSrc,
          isPlaying: true,
        };
      } else {
        // 인덱스가 유효하지 않은 경우에 대한 기본값 설정
        state.selectedItem = {
          musicName: "",
          artistName: "",
          musicImgSrc: "",
          isPlaying: false,
        };
      }
    },
  },
});

export const {
  addPlaylist,
  removePlaylist,
  calculateTotals,
  setSelectedIndex,
  setPlayingMusic,
  setIsPlaying, 
  setPause,
  resetSelectedItem
} = playlistSlice.actions;
export default playlistSlice.reducer;

export const resetMusic = () => (dispatch) => {
  dispatch(setPause());
  setTimeout(() => {
    dispatch(setIsPlaying());
  }, 400);
};

export const removePlaylistAndReset = (index) => (dispatch,getState) => {
  const state = getState();
  
  if (index + 1 === state.playlist.items.length) {
    dispatch(setSelectedIndex(index - 1));
    dispatch(resetSelectedItem(index - 1));
    if (state.playlist.items.length !== 1) dispatch(resetMusic());
  }
  else {
    dispatch(setSelectedIndex(index+1))
    dispatch(resetSelectedItem(index+1))
    dispatch(resetMusic());
    
  };
  dispatch(removePlaylist(index));

};