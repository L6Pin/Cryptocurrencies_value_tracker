import { combineReducers } from "redux";
import loginUserReducer from "./loginUserReducer";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUserReducer"],
};

const rootReducer = combineReducers({
    loginUserReducer
});

export default persistReducer(persistConfig, rootReducer);