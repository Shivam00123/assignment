import {
  FETCHED_USER_INFO,
  FETCHING_USERS,
  FETCH_USER,
  FETCH_USER_FAILED,
} from "./actionTypes";

const initialState = {
  loading: false,
  userID: 0,
  usersData: [],
  errorMsg: "",
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCHING_USERS:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case FETCH_USER:
      return {
        ...state,
        usersData: action.users,
        loading: false,
        errorMsg: "",
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        usersData: [],
        errorMsg: action.errorMsg,
      };
    case FETCHED_USER_INFO:
      return {
        ...state,
        userID: action.id,
        errorMsg: "",
      };
    default:
      return state;
  }
};
