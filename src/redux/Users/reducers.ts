import { FETCHED_USER } from "./actionTypes";

const initialState = {
  userID: 0,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCHED_USER:
      return {
        ...state,
        userID: action.id,
      };
    default:
      return state;
  }
};
