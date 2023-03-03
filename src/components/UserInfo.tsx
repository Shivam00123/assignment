import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImSad } from "react-icons/im";

import useFetchUserInfo from "@/hooks/use-fetch-selected-user";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Container from "@/assets/Container/Container";
import ChatBox from "@/assets/ChatBox/ChatBox";

interface InfoPanelProps {
  Key: string;
  value: string;
}

const InfoPanel = ({ Key, value }: InfoPanelProps) => {
  return (
    <div className="w-fit min-w-[50%] h-full flex items-center justify-center">
      <div className="w-full h-fit flex items-start text-textcolor  space-x-4  text-base xl:text-lg sm:text-sm">
        <h1 className="opacity-75 whitespace-nowrap">{Key} : </h1>
        <h1 className="font-bold">{value}</h1>
      </div>
    </div>
  );
};

const UserInfo = () => {
  const params = useParams();
  const { fetchUserInfo } = useFetchUserInfo();
  const [userDetails, setUserDetails] = useState<any>({});
  const navigate = useNavigate();

  useMemo(() => {
    console.log({ id: params.id });
    if (params.id) {
      let userInfo = fetchUserInfo(parseInt(params.id));
      setUserDetails(userInfo ? userInfo : "not found");
    } else {
      console.log("yes");
      navigate("/");
    }
  }, [params.id]);

  return (
    <div className="w-screen h-screen flex items-center justify-center p-5 md:overflow-hidden">
      {userDetails === "not found" ? (
        <div className="text-4xl text-textcolor flex items-center space-x-4">
          <h1>User not found</h1> <ImSad />
        </div>
      ) : (
        <div className="w-full h-full relative">
          <Sidebar />
          <Navbar userDetails={userDetails} title="Profile" />
          <Container>
            <div className="w-full h-full md:flex items-center justify-center">
              <div className="md:w-[45%] w-full h-full flex flex-col items-center justify-evenly">
                <div className="w-1/2 h-fit flex flex-col items-center justify-center translate-x-[-10%]">
                  <div className="w-40 h-40 rounded-full overflow-hidden">
                    <img
                      src={userDetails?.image}
                      alt="user-profile"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="text-xl text-textcolor font-semibold">
                    Leanne Graham
                  </h1>
                </div>

                <div className="w-1/2 h-fit flex flex-col items-start">
                  <InfoPanel Key="Username" value={userDetails?.name} />
                  <InfoPanel Key="e-mail" value={userDetails?.email} />
                  <InfoPanel Key="phone" value={userDetails?.phone} />
                  <InfoPanel Key="Website" value={userDetails?.website} />
                </div>
                <div className="w-4/5 h-[1px] bg-textcolor my-1"></div>
                <h1 className="text-2xl text-textcolor">Company</h1>
                <div className="w-1/2 h-fit flex flex-col items-start">
                  <InfoPanel Key="Name" value={userDetails?.company?.name} />
                  <InfoPanel
                    Key="catchPhrase"
                    value={userDetails?.company?.catchphrase}
                  />
                  <InfoPanel Key="bs" value={userDetails?.company?.bs} />
                </div>
              </div>
              <div className="h-full w-[1px] bg-textcolor mt-5 md:block hidden"></div>
              <div className="md:w-[45%] w-full h-full  flex flex-col md:items-start md:justify-start justify-center items-center">
                <div className="w-full h-fit min-h-[30%] flex flex-col items-start px-10">
                  <h1 className="text-2xl text-textcolor">Address</h1>
                  <div className="w-1/2 h-fit flex flex-col ml-10">
                    <InfoPanel
                      Key="Street"
                      value={userDetails?.address?.street}
                    />
                    <InfoPanel
                      Key="Suite"
                      value={userDetails?.address?.suite}
                    />
                    <InfoPanel Key="City" value={userDetails?.address?.city} />
                    <InfoPanel
                      Key="Zipcode"
                      value={userDetails?.address?.zipcode}
                    />
                  </div>
                </div>
                <div className="md:w-full w-[90%]  md:h-1/2 h-2/5  overflow-hidden m-5 rounded-3xl md:translate-x-[5%] flex-shrink-0">
                  <img
                    src="https://i.stack.imgur.com/HILmr.png"
                    alt="map-image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-fit flex items-center justify-end space-x-3 md:pr-0 pr-10">
                  <p className="text-xs">
                    Lat: <span className="font-bold">-37.3159</span>
                  </p>
                  <p className="text-xs">
                    Long: <span className="font-bold">81.1496</span>
                  </p>
                </div>
              </div>
            </div>
            <ChatBox />
          </Container>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
