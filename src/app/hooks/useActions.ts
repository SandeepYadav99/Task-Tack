import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import allActions from "../store/actions";
import { RootState } from "../store/store";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
