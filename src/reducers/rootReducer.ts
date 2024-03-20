import { combineReducers } from "@reduxjs/toolkit";
import count from "./counterSlice";
const rootReducer = combineReducers({
  count,
});

export default rootReducer;
