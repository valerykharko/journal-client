import { User, UserAction, UserActionsTypes } from "interfaces/user";

export function setUser(user: User | null): UserAction {
  return { type: UserActionsTypes.SET_USER, payload: user };
}

export function setAuth(isAuth: boolean): UserAction {
  return { type: UserActionsTypes.SET_AUTH, payload: isAuth };
}
