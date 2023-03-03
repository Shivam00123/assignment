import {
  FETCHED_USER_INFO,
  FETCHING_USERS,
  FETCH_USER,
  FETCH_USER_FAILED,
} from "./actionTypes";

// when we successfully fetched the user info

export const gotUsers = (users: any[]) => {
  return {
    type: FETCH_USER,
    users,
  };
};

// when users are fetching

export const fetchingUsers = () => {
  return {
    type: FETCHING_USERS,
  };
};

//some error occurred while fetching users

const fetchUserFailed = (errorMsg: string) => {
  return {
    type: FETCH_USER_FAILED,
    errorMsg,
  };
};

// action creator to fetch users from server

export const fetchUsers: any = (): Function => {
  return (dispatch: any): void => {
    dispatch(fetchingUsers());
    fetch("https://panorbit.in/api/users.json")
      .then((res) => res.json())
      .then((res) => dispatch(gotUsers(res.users)))
      .catch((err) => {
        dispatch(fetchUserFailed(err.message));
      });
  };
};

//when specific user info needed

export const fetchedUserInfo = (id: number) => {
  return {
    type: FETCHED_USER_INFO,
    id,
  };
};
