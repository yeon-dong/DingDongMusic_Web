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
      console.log(action.payload);
      state.items.push({ ...action.payload, amount: 1 });
      //   const existingItem = state.items.find(
      //     (item) => item.id === action.payload.id
      //   );
      //   console.log("Existing item:", existingItem);

      //   if (existingItem) {
      //     existingItem.amount += 1; // 앨범이 이미 존재하면 수량 증가
      //   } else {
      //     state.items.push({ ...action.payload, amount: 1 }); // 새 앨범 추가
      //   }
      console.log("Updated items:", state.items);
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1; // 수량 감소
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          ); // 수량이 0이면 제거
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
  },
});

export const { addItem, removeItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
