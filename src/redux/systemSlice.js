import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "system",
  initialState: {
    theme: "light",
  },
  reducers: {
    setToggleThemeMode: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { setToggleThemeMode } = counterSlice.actions;

export default counterSlice.reducer;
