import * as types from "./actionTypes";
import * as currenciesApi from "../../api/currencies";

export function getCurrencyInfoRequest() {
  return {
    type: types.GET_CURRENCY_INFO_REQUEST,
  };
}

export function getCurrencyInfoSuccess(response) {
  return {
    type: types.GET_CURRENCY_INFO_SUCCESS,
    response,
  };
}

export function getCurrencyInfoFailure() {
  return {
    type: types.GET_CURRENCY_INFO_FAILURE,
  };
}

export function getCurrencyInfo(params) {
  return (dispatch) => {
    dispatch(getCurrencyInfoRequest);
    currenciesApi
      .getCurrencyInfo(params)
      .then((response) => dispatch(getCurrencyInfoSuccess(response)))
      .catch(() => dispatch(getCurrencyInfoFailure()));
  };
}
