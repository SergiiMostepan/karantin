import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loadung',
  initialState: false,
  reducers: {
    isLoading: (state, action) => !state,
  },
});
