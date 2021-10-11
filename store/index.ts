import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer, RootState } from "./reducers/rootReducer";

const makeStore = (context: Context) =>
  createStore(rootReducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
