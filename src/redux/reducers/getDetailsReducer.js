import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function getDetailsReducer(
  state = initialState.currencyDetails,
  action
) {
  switch (action.type) {
    case types.GET_DETAILS_REQUEST: {
      return state;
    }
    case types.GET_DETAILS_SUCCESS: {
      return action.response;
    }
    case types.GET_SYMBOLS_FAILURE: {
      return state;
    }
    case types.GET_DETAILS_RESET: {
      return null;
    }
    default: {
      return state;
    }
  }
}
