import { configureStore } from '@reduxjs/toolkit';

import { autoComplete } from './autoComplete';

export const store = configureStore({
  reducer: {
    autoComplete: autoComplete.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
