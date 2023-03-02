import { Users } from "@/data/user-data";
import React, { useState } from "react";

const useFetchUserInfo = () => {
  const [userInfo, setUserInfo] = useState<any[]>([]);
  const data = Users;

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
        return data[mid];
      }
    }
    return null;
  };

  const fetchUserInfo = (id: number) => {
    if (id) {
      let user = searchUser(id);
      return user;
    }
  };

  return {
    fetchUserInfo,
  };
};

export default useFetchUserInfo;
