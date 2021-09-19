import { combineReducers } from "redux";
import loginUserReducer from "./loginUserReducer";
import { getSymbolsReducer } from "./getSymbolsReducers";
import { getCurrencyInfoReducer } from "./getCurrencyInfoReducer";
import persistReducer from "redux-persist/es/persistReducer";
import { getDetailsReducer } from "./getDetailsReducer";
import { favoriteReducers } from "./favoriteReducers";
import { getFavoriteInfoReducer } from "./getFavoriteInfoReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUserReducer", "favoriteReducers"],
};

const rootReducer = combineReducers({
  loginUserReducer,
  getSymbolsReducer,
  getCurrencyInfoReducer,
  getDetailsReducer,
  favoriteReducers,
  getFavoriteInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
