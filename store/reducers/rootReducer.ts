import { combineReducers } from "redux";
import { linksReducer, usersReducer, categoriesReducer, postsReducer } from ".";

export const rootReducer = combineReducers({
  link: linksReducer,
  user: usersReducer,
  // categories: categoriesReducer,
  // posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
