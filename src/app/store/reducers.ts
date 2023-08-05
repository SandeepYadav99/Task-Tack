import { combineReducers } from "@reduxjs/toolkit";
import loaderReducer from "./slices/loaderSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  loaderReducer: loaderReducer,
  cartReducer: cartReducer,
});

export default rootReducer;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
