import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../Users/reducers";

export const rootReducer = combineReducers({
  userReducer: userReducer,
});
