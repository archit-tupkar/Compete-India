import React, { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { userInfoAtom } from "../atoms/userAtom";
import axios from "axios";
import { InputField } from "../components/InputField";
import { Logout } from "../components/Logout";
import { ButtonSec, SubmitButton } from "../components/Buttons";

export const Profile = () => {
    // const user = useRecoilValue(userInfoAtom);
    const user = JSON.parse(localStorage.getItem("userInfo"));

    const [first, setfirst] = useState();
    console.log(user);
    useEffect(() => {
        const U = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/user/", {
                    // withCredentials: true,
                });
                console.log(res.data);
                setfirst(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        U();
    }, []);
    console.log(first?.imageUrl);
    return (
        <div>
            <p className="text-center text-4xl">Profile </p>
            <div className="max-w-lg mx-auto flex flex-col">
                <img
                    className="h-32 w-32 m-8 rounded-full object-cover self-center"
                    src={user?.imageUrl}
                    alt="profile-picture"
                    srcSet=""
                />
                <InputField value={user?.username} type={"text"} />
                {user?.email ? (
                    <InputField value={user?.email} type={"text"} />
                ) : null}
                <InputField
                    type={"text"}
                    lable={"change password"}
                    value={""}
                />
                <SubmitButton lable={"Update"} />
                <div className="flex justify-between">
                    <SubmitButton
                        lable={"Delete Account"}
                        className={"bg-red-900"}
                    />
                    <Logout />
                </div>
            </div>
            {/* <p>{user.userId}</p> */}
        </div>
    );
};
