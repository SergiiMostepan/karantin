import { createSlice } from "@reduxjs/toolkit";

export const isAuntificatedSlice = createSlice({
  name: "autentification",
  initialState: false,
  reducers: {
    auntentificate: (state) => !state,
  },
});

export const AuntificatedUserSlice = createSlice({
  name: "autentifiedUser",
  initialState: "",
  reducers: {
    autentifiedUser: (state, action) => action.payload,
  },
});
