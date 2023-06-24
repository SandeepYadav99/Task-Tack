
import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";

const rootReducer = combineReducers({
  loaderReducer: loaderReducer,
});

export default rootReducer;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
