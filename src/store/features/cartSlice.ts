import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "./marketSlice";

interface CartItemType extends ItemType {
  quantity: number;
}

interface CartState {
  cartItems: CartItemType[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<CartItemType>) => {
      const isFound = state.cartItems.filter(
        (cartItem) => cartItem.name === payload.name
      );
      if (!isFound) {
        state.cartItems.push(payload);
        state.totalPrice += payload.quantity * payload.price;
      }
    },
    removeItem: (state, { payload }: PayloadAction<CartItemType>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.name === payload.name
      );
      state.totalPrice -= payload.quantity * payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
