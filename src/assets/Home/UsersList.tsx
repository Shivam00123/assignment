import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Users } from "@/data/user-data";
import { fetchedUserInfo } from "@/redux/Users/actions";

interface UserInfoProps {
  id: string;
  name: string;
  image: string;
}

const UserInfoContainer = ({ id, name, image }: UserInfoProps) => {
  return (
    <div
      id={id}
      className="w-full min-h-20 h-[18%] flex items-center justify-start px-14 space-x-5 relative py-2 cursor-pointer"
    >
      <div className="w-12 h-12 bg-[red] rounded-full overflow-hidden pointer-events-none">
        <img
          src={image}
          alt="user-image"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-2xl text-textcolor pointer-events-none">{name}</h1>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-textcolor opacity-20"></div>
    </div>
  );
};

const UsersList = () => {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = (): void => {
    let fetchData = Users;
    setData(fetchData);
  };

  const getUserInfo = (e: any): void => {
    let userId = e.target.id;
    if (userId) {
      dispatch(fetchedUserInfo(parseInt(userId)));
      navigate(`/user/${userId}`, {
        state: {
          userId,
        },
      });
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-start py-2"
      onClick={getUserInfo}
    >
      {data?.map((user) => (
        <UserInfoContainer
          key={user.id}
          name={user.name}
          image={user.image}
          id={user.id}
        />
      ))}
    </div>
  );
};

export default UsersList;
