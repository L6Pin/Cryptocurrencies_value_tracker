import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function getSymbolsReducer(state = initialState.symbols, action) {
  switch (action.type) {
    case types.GET_SYMBOLS_REQUEST: {
      return state;
    }
    case types.GET_SYMBOLS_SUCCESS: {
      return action.response.splice(0, 5);
    }
    case types.GET_SYMBOLS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
