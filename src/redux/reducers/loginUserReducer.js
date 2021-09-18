import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function loginUserReducer(
  state = initialState.userLoggedIn,
  action,
) {
  switch (action.type) {
    case types.LOGIN_USER: {
      return !state;
    }
    default: {
      return state;
    }
  }
}
