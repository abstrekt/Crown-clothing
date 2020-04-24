import userActionsTypes from "./user.types";

// export const setCurrentUser = user => ({
//   type: userActionsTypes.SET_CURRENT_USER,
//   payload: user
// });

export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGNIN_START
});

export const signInSuccess = user => ({
  type: userActionsTypes.SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionsTypes.SIGNIN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionsTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

