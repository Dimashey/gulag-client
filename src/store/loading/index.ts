import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false };

const loadingSlice = createSlice({
  name: 'global-loading',
  initialState,
  reducers: {
    setGlobalLoading(state) {
      state.loading = true;
    },
    resetGlobalLoading(state) {
      state.loading = false;
    },
  },
});

export const globalLoadingReducer = loadingSlice.reducer;
export const { setGlobalLoading, resetGlobalLoading } = loadingSlice.actions;
