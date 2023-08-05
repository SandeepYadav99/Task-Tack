import { cartActions } from "./slices/cartSlice";
import { loaderActions } from "./slices/loaderSlice";

const actions = {
  ...loaderActions,
  ...cartActions
};

export default actions;
