import { combineReducers } from "redux";
import loginUserReducer from "./loginUserReducer";
import { getSymbolsReducer } from "./getSymbolsReducers";
import { getCurrencyInfoReducer } from "./getCurrencyInfoReducer";
import persistReducer from "redux-persist/es/persistReducer";
import { getDetailsReducer } from "./getDetailsReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUserReducer"],
};

const rootReducer = combineReducers({
  loginUserReducer,
  getSymbolsReducer,
  getCurrencyInfoReducer,
  getDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);
