import { combineReducers } from "redux";
import loginUserReducer from "./loginUserReducer";
import { getSymbolsReducer } from "./getSymbolsReducers";
import persistReducer from "redux-persist/es/persistReducer";
import { getDetailsReducer } from "./getDetailsReducer";
import { favoriteReducers } from "./favoriteReducers";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUserReducer", "favoriteReducers"],
};

const rootReducer = combineReducers({
  loginUserReducer,
  getSymbolsReducer,
  getDetailsReducer,
  favoriteReducers,
});

export default persistReducer(persistConfig, rootReducer);
