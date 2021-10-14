import { UserAction, UserActionsTypes, UserState } from "interfaces/user";

const initialState: UserState = {
  user: undefined,
  isAuth: false,
};

const usersReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionsTypes.SET_USER:
      return { ...state, user: action.payload };
    case UserActionsTypes.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
