import * as LinksActionCreators from "./links";
import * as UsersActionCreators from "./users";
import * as CategoriesActionCreators from "./categories";

export default {
  ...LinksActionCreators,
  ...UsersActionCreators,
  ...CategoriesActionCreators,
};
