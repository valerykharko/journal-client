import { LinkAction, LinkActionsTypes } from "interfaces/link";

export function setActiveLink(link: number): LinkAction {
  return { type: LinkActionsTypes.SET_ACTIVE_LINK, payload: link };
}
