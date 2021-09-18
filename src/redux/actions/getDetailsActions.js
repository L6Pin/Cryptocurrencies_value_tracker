import * as types from "./actionTypes";
import * as currenciesApi from "../../api/currencies";

export function getDetailsRequest() {
  return {
    type: types.GET_DETAILS_REQUEST,
  };
}

export function getDetailsSuccess(response) {
  return {
    type: types.GET_DETAILS_SUCCESS,
    response,
  };
}

export function getDetailsFailure() {
  return {
    type: types.GET_SYMBOLS_FAILURE,
  };
}

export function getDetailsReset() {
  return {
    type: types.GET_DETAILS_RESET,
  };
}

export function getDetails(params) {
  return (dispatch) => {
    dispatch(getDetailsRequest);
    currenciesApi
      .getDetails(params)
      .then((response) => dispatch(getDetailsSuccess(response)))
      .catch(() => dispatch(getDetailsFailure));
  };
}
