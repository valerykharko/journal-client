import { LinkState, LinkAction, LinkActionsTypes } from "interfaces/link";

const initialState: LinkState = {
  activeLink: 1,
};

const linksReducer = (state = initialState, action: LinkAction): LinkState => {
  switch (action.type) {
    case LinkActionsTypes.SET_ACTIVE_LINK:
      return { ...state, activeLink: action.payload };
    default:
      return state;
  }
};

export default linksReducer;
