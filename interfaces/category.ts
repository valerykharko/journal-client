import { Post, Image } from "interfaces";
import { User } from "./user";

export default interface Category {
  id: number;
  title: string;
  description: string;
  image: Image;
  big_image: Image;
  posts: Array<Post>;
  users: Array<User>;
}

export interface CategoryState {
  category: Category;
  categories: Array<Category>;
}

export enum CategoriesActionsTypes {
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORY = "FETCH_CATEGORY",
}

interface FetchCategories {
  type: CategoriesActionsTypes.FETCH_CATEGORIES;
  payload: Array<Category>;
}

interface FetchCategory {
  type: CategoriesActionsTypes.FETCH_CATEGORY;
  payload: Category;
}

export type CategoryAction = FetchCategories | FetchCategory;
