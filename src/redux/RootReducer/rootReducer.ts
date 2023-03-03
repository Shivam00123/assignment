import { combineReducers } from "@reduxjs/toolkit";
import { menuReducer } from "../Menu/menuReducers";
import { userReducer } from "../Users/reducers";

export const rootReducer = combineReducers({
  userReducer: userReducer,
  menuReducer: menuReducer,
});
