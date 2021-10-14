import { Dispatch } from "redux";
import { CategoriesActionsTypes, CategoryAction } from "interfaces/category";

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoryAction>) => {
    const categories = await fetch(`${process.env.API_URL}/categories`).then(
      (response) => response.json()
    );
    dispatch({
      type: CategoriesActionsTypes.FETCH_CATEGORIES,
      payload: categories,
    });
  };
};

// export const fetchCategory = () => {
//   return async (dispatch: Dispatch<CategoryAction>) => {
//     const category = await fetch(`${process.env.API_URL}/categories`).then(
//       (response) => response.json()
//     );
//     dispatch({
//       type: CategoriesActionsTypes.FETCH_CATEGORY,
//       payload: category,
//     });
//   };
// };
