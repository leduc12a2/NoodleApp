import {createAction} from '@reduxjs/toolkit';
import {ModeType} from '../types';
export const setLanguage = createAction<string>('systems/setLanguage');
export const setMode = createAction<ModeType>('systems/setMode');
export const setSplashLoad = createAction('systems/setSplashLoad');

export type SystemsEpicActions = any;
