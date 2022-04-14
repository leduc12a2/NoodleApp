import {Credential} from '@domain';
import {createAction} from '@reduxjs/toolkit';

export const signIn = createAction<Credential>('authentication/singIn');

export type SignIn = ReturnType<typeof signIn>;

export type AuthenticationEpicActions = SignIn;
