import { ReducerAuth } from "./slices/sliceAuth";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSelectorHook, useDispatch } from "react-redux";

const RootReducer = combineReducers({
  auth: ReducerAuth,
});

type ReducerParams = Parameters<typeof RootReducer>;
type ReducerReturn = ReturnType<typeof RootReducer>;

const ActionAppTypeResetStore = "RESET_APP_REDUX_STORE";

export const ActionApp = {
  ResetStore: (): AnyAction => ({ type: ActionAppTypeResetStore }),
};

const AppReducer = (...arg: ReducerParams): ReducerReturn => {
  const [, action] = arg;
  if (action.type === ActionAppTypeResetStore) {
    return RootReducer(undefined, action);
  }
  return RootReducer(...arg);
};

export const ITAppStore = configureStore({
  reducer: AppReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type ITAppState = ReturnType<typeof RootReducer>;
export type ITAppDispatch = typeof ITAppStore.dispatch;
export const useAppDispatch = () => useDispatch<ITAppDispatch>();
export const useAppSelector = createSelectorHook<ITAppState>();
