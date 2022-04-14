import {createReducer} from '@reduxjs/toolkit';
import {signIn} from '../actions';

export type AuthenticationState = {
  accessToken: string;
};

const INITIAL_STATE: AuthenticationState = {
  accessToken: '',
};

export const authenticationReducer = createReducer(INITIAL_STATE, (builder) =>
  builder.addCase(signIn, (state) =>
    Object.assign(state, {isAuthenticating: true}),
  ),
);
