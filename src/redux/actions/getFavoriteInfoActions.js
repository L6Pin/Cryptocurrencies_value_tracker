import * as types from "./actionTypes";
import * as currenciesApi from "../../api/currencies";

export function getFavoriteInfoRequest() {
  return {
    type: types.GET_FAVORITE_INFO_REQUEST,
  };
}

export function getFavoriteInfoSuccess(response) {
  return {
    type: types.GET_FAVORITE_INFO_SUCCESS,
    response,
  };
}

export function getFavoriteInfoFailure() {
  return {
    type: types.GET_FAVORITE_INFO_FAILURE,
  };
}

export function getFavoriteInfo(params) {
  return (dispatch) => {
    dispatch(getFavoriteInfoRequest);
    currenciesApi
      .getCurrencyInfo(params)
      .then((response) => {
        console.log(response)
        dispatch(getFavoriteInfoSuccess(response))
      })
      .catch(() => dispatch(getFavoriteInfoFailure()));
  };
}
