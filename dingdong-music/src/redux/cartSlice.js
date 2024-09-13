import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAlbums: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.amount += 1; // 앨범이 이미 존재하면 수량 증가
      } else {
        state.items = [...state.items, { ...action.payload, amount: 1 }]; // 새 앨범 추가
      }
    },
    removeItem: (state, action) => {
      const music = action.payload; // action.payload에서 music 객체를 가져옴
      const item = state.items.find((item) => item.id === music.id); // music.id로 아이템 찾기
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1; // 수량 감소
        } else {
          state.items = state.items.filter((item) => item.id !== music.id); // 수량이 1 이하이면 제거
        }
      }
    },
    clearCart: (state) => {
      state.items = []; // 장바구니 초기화
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
  },
});

export const { addItem, removeItem, calculateTotals, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
