import { UserAction, UserActionsTypes, UserState } from "interfaces/user";

const initialState: UserState = {
  user: null,
  isAuth: false,
};

const usersReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionsTypes.SET_USER:
      return { ...state, user: action.payload, isAuth: true };
    default:
      return state;
  }
};

export default usersReducer;
