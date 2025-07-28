import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ConfigsSliceState {
  version: string;
  currentLang: string;
}

const initialState: ConfigsSliceState = {
  version: process.env.NEXT_PUBLIC_VERSION || '1.0.0',
  currentLang: 'en',
};

export const configsSlice = createSlice({
  name: 'configs',
  initialState,
  reducers: (create) => ({
    setCurrentLang: create.reducer((state, action: PayloadAction<string>) => {
      return { ...state, currentLang: action.payload };
    }),
  }),
  selectors: {
    getVersion: (state: ConfigsSliceState) => state.version,
    getCurrentLang: (state: ConfigsSliceState) => state.currentLang,
  },
});

export const { getVersion, getCurrentLang } = configsSlice.selectors;
export const { setCurrentLang } = configsSlice.actions;
