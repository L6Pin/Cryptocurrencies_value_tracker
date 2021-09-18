import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function getCurrencyInfoReducer(
  state = initialState.currencyInfo,
  action
) {
  switch (action.type) {
    case types.GET_CURRENCY_INFO_FAILURE: {
      return state;
    }
    case types.GET_CURRENCY_INFO_SUCCESS: {
      return action.response;
    }
    case types.GET_CURRENCY_INFO_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
