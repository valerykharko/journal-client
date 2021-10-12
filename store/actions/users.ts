import { User, UserAction, UserActionsTypes } from "interfaces/user";

export function SetUser(user: User): UserAction {
  return { type: UserActionsTypes.SET_USER, payload: user };
}
