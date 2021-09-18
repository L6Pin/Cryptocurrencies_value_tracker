import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function favoriteReducers(state = initialState.favorites, action) {
  switch (action.type) {
    case types.ADD_FAVORITES: {
      return [...state, action.response];
    }
    case types.REMOVE_FAVORITES: {
      let newState = state.filter((favorite) => favorite.name !== action.response.name);
      return newState;
    }
    default: {
      return state;
    }
  }
}
