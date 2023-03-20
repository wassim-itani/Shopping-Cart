import { configureStore } from "@reduxjs/toolkit";
import marketSliceReducer from "./features/marketSlice";
import cartSliceReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    market: marketSliceReducer,
    cart: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
