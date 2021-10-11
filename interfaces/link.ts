export interface LinkState {
  activeLink: number;
}

export enum LinkActionsTypes {
  SET_ACTIVE_LINK = "SET_ACTIVE_LINK",
}

interface SetActiveLink {
  type: LinkActionsTypes.SET_ACTIVE_LINK;
  payload: number;
}

export type LinkAction = SetActiveLink;
