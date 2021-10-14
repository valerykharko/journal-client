import {
  CategoriesActionsTypes,
  CategoryAction,
  CategoryState,
} from "interfaces/category";

const initialState: CategoryState = {
  categories: [],
  category: undefined,
};

const categoriesReducer = (
  state = initialState,
  action: CategoryAction
): CategoryState => {
  switch (action.type) {
    case CategoriesActionsTypes.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case CategoriesActionsTypes.FETCH_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
