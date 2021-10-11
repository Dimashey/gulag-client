import { configureStore } from '@reduxjs/toolkit';
import { globalLoadingReducer } from 'store/loading';

export const store = configureStore({
  reducer: {
    globalLoading: globalLoadingReducer,
  },
});
