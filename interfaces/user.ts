import { Image } from "interfaces";

export interface User {
  id: number;
  firstName: number;
  secondName: number;
  email: string;
  avatar: Image;
}

export interface UserState {
  user: User | null;
  isAuth: boolean;
}

export enum UserActionsTypes {
  SET_USER = "SET_USER",
}

interface SetUser {
  type: UserActionsTypes.SET_USER;
  payload: User;
}

export type UserAction = SetUser;