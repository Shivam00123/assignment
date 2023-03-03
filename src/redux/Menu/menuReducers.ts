import { MENU_CHANGE } from "./actionsTypes";

const initialState = {
  menuState: "profile",
};

export const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MENU_CHANGE:
      return {
        ...state,
        menuState: action.item,
      };
    default:
      return state;
  }
};
