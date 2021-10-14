import { Image } from "interfaces";

export interface User {
  id: number;
  username: string;
  firstName: string;
  secondName: string;
  email: string;
  avatar: Image;
  created_at: string;
}

export interface UserState {
  user: User;
  isAuth: boolean;
}

export enum UserActionsTypes {
  SET_USER = "SET_USER",
  SET_AUTH = "SET_AUTH",
}

interface SetUser {
  type: UserActionsTypes.SET_USER;
  payload: User;
}

interface SetAuth {
  type: UserActionsTypes.SET_AUTH;
  payload: boolean;
}

export type UserAction = SetUser | SetAuth;
