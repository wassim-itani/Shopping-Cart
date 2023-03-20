import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ItemType {
  name: string;
  price: number;
  image: string;
}

interface MarketState {
  isLoading: boolean;
  items: ItemType[];
  filteredItems: ItemType[];
}

const initialState: MarketState = {
  isLoading: true,
  items: [],
  filteredItems: [],
};

export const fetchMarketItems = createAsyncThunk(
  "fetchMarketItems",
  async (url: string) => {
    const res = await fetch(url);
    return (await res.json()) as ItemType[];
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    searchItems: (state, action: PayloadAction<string>) => {
      state.filteredItems = state.items.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarketItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.filteredItems = action.payload;
    });
  },
});

export const { searchItems } = marketSlice.actions;
export default marketSlice.reducer;
