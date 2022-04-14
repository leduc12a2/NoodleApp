import {createReducer} from '@reduxjs/toolkit';
import {setLanguage, setSplashLoad, setMode} from '../actions';

export type ModeType = 'production' | 'staging';
export type SystemState = {
  language: string;
  mode: ModeType;
  splashLoad: boolean;
};
const INITIAL_STATE: SystemState = {
  language: '',
  mode: 'production',
  splashLoad: false,
};
export const systemsReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(setLanguage, (state, action) =>
      Object.assign(state, {language: action.payload}),
    )
    .addCase(setSplashLoad, (state) => Object.assign(state, {splashLoad: true}))
    .addCase(setMode, (state, action) =>
      Object.assign(state, {mode: action.payload}),
    ),
);
