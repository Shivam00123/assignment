import { FETCHED_USER } from "./actionTypes";

export const fetchedUserInfo = (id: number) => {
  return {
    type: FETCHED_USER,
    id,
  };
};
