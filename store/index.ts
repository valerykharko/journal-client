import { createStore, applyMiddleware, Store, AnyAction, compose } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer, RootState } from "./reducers/rootReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose;

const makeStore = (context: Context) =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
