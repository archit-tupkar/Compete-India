import React from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atoms/user.atom";

const Dashboard = () => {
    const user = useRecoilValue(userInfoAtom);
    console.log(user);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return <div className="text-text-1">Dashboard</div>;
};

export default Dashboard;
