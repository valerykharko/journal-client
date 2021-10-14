import { combineReducers } from "redux";
import { categoriesReducer, linksReducer, usersReducer } from ".";

export const rootReducer = combineReducers({
  link: linksReducer,
  user: usersReducer,
  categories: categoriesReducer,
  // posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
