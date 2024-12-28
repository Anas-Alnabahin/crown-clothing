import { AnyAction } from "redux";

import {
  checkUserSession,
  emailSignInStart,
  googleSignInStart,
  loadingForUserCheckEnds,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  signUpFailed,
  signUpStart,
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (
    emailSignInStart.match(action) ||
    googleSignInStart.match(action) ||
    signUpStart.match(action) ||
    signOutStart.match(action) ||
    checkUserSession.match(action)
  ) {
    return { ...state, isLoading: true };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null, isLoading: false };
  }

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload, isLoading: false };
  }

  if (loadingForUserCheckEnds.match(action)) {
    return { ...state, isLoading: false };
  }

  return state;
};
