import * as types from "./actionTypes";

export function addFavorites(response) {
  return {
    type: types.ADD_FAVORITES,
    response,
  };
}

export function removeFavorites(response) {
  return {
    type: types.REMOVE_FAVORITES,
    response,
  };
}
