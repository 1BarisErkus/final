import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeaderVisible: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    hideHeader: (state) => {
      state.isHeaderVisible = false;
    },
  },
});

export const { hideHeader } = globalSlice.actions;

export default globalSlice.reducer;
