import { fetchedUserInfo } from "@/redux/Users/actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useFetchUserInfo = () => {
  const data = useSelector((state: any) => state.userReducer.usersData);
  const navigate = useNavigate();
  const [friendsList, setFriendsList] = useState<any[]>([]);
  const dispatch = useDispatch();

  //filter function

  const filterList = (obj: any) => {
    let filteredData = data.filter((user: any) => user.id !== obj.id);
    setFriendsList(filteredData);
  };

  //to search for the user and get the info of particular user clicked
  //if not found redirect to homepage
  const searchUser = (id: number) => {
    let start = 0;
    let end = data.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (data[mid].id > id) {
        end = mid - 1;
      } else if (data[mid].id < id) {
        start = mid + 1;
      } else {
        dispatch(fetchedUserInfo(data[mid].id));
        return data[mid];
      }
    }
    navigate("/");
  };

  //search for the user and filter out user to show on the chatbox

  const fetchUserInfo = (id: number) => {
    if (id) {
      let user = searchUser(id);
      filterList(user);
      return user;
    }
  };

  return {
    fetchUserInfo,
    friendsList,
  };
};

export default useFetchUserInfo;
