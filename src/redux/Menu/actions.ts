import { MENU_CHANGE } from "./actionsTypes";

// to get what currently menu item is selected to change styling of menu

export const menuChange = (item: string) => {
  return {
    type: MENU_CHANGE,
    item,
  };
};
