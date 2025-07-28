import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { configsSlice } from './slices/configsSlice';
import { deviceSlice } from './slices/deviceSlice';
import type { Action, ThunkAction } from '@reduxjs/toolkit';

const rootReducer = combineSlices(configsSlice, deviceSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {},
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
