import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { deezerCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [deezerCoreApi.reducerPath]: deezerCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDafaultMiddleware) => getDefaultMiddleware().concat(deezerCoreApi.middleware),
});
