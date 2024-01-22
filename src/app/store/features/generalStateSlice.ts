import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const generalStateSlice = createSlice({
  name: "generalState",
  initialState: {
    search: "" as string,
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = generalStateSlice.actions;

export const selectSearch = (state: RootState) => state.generalState.search;

export default generalStateSlice.reducer;
