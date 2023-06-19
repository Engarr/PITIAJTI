import { configureStore } from '@reduxjs/toolkit';
import type { ColorModeState } from './slice/colorModeSlice';
import modeSlice from './slice/colorModeSlice';

export interface State {
  mode: ColorModeState;
}

export const store = configureStore({
  reducer: {
    mode: modeSlice,
  },
});
