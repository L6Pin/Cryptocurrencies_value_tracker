import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function getFavoriteInfoReducer(
  state = initialState.favoritesInfo,
  action
) {
  switch (action.type) {
    case types.GET_FAVORITE_INFO_FAILURE: {
      return state;
    }
    case types.GET_FAVORITE_INFO_SUCCESS: {
      return action.response;
    }
    case types.GET_FAVORITE_INFO_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
