import * as types from "./actionTypes";
import * as currenciesApi from "../../api/currencies";

export function getSymbolsRequest() {
  return {
    type: types.GET_SYMBOLS_REQUEST,
  };
}

export function getSymbolsSuccess(response) {
  return {
    type: types.GET_SYMBOLS_SUCCESS,
    response,
  };
}

export function getSymbolsFailure() {
  return {
    type: types.GET_SYMBOLS_FAILURE,
  };
}

export function getSymbols() {
  return (dispatch) => {
    dispatch(getSymbolsRequest);
    currenciesApi
      .getSymbols()
      .then((response) => dispatch(getSymbolsSuccess(response)))
      .catch(() => dispatch(getSymbolsFailure));
  };
}
