import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    getUsersStarted: (state, action) => [...state],
    getUsersSuccess: (state, action) => action.payload.reverse(),

    deleteUsersStarted: (state, action) => [...state],
    deleteUsersSuccess: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
    postUsersStarted: (state, action) => [...state],
    // postUsersSuccess: (state, action) => [...state, action.payload],
    postUsersSuccess: (state, action) => [...state, action.payload],
  },
});
