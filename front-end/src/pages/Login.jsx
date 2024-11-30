import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import z from "zod";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMailSharp } from "react-icons/io5";
import { notify } from "./App";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/user.atom";

export const Login = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [errorMsg, setErrorMsg] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const format = z.object({
        username: z.string().min(4),
        password: z.string().min(8).max(16),
    });

    const handleChange = (e) => {
        setError(false);
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fields validation
        if (!formData?.username?.trim() || !formData?.password?.trim()) {
            setError(true);
            setErrorMsg("Both fields are required");
            return;
        }

        // Sending login request
        setLoading(true);
        e.preventDefault();
        const url = " http://localhost:3000/api/auth/login";
        try {
            const response = await axios.post(
                url,
                formData
                // { withCredentials: true }
            );
            const data = response.data;
            setUserInfo(data.userInfo);
            console.log(data);
            //toast msg: data.message
            setError(false);
            localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
            localStorage.setItem("token", JSON.stringify(data.token));
            setTimeout(() => {
                setLoading(false);
                navigate("/dashboard");
            }, 500);
        } catch (error) {
            setError(true);
            setErrorMsg(error);
            notify("error", "Both fields required", "bottom-right");
            console.log(error);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Fields validation
    //     if (!formData.username.trim() || !formData.password.trim()) {
    //         setError(true);
    //         setErrorMsg("Both fields are required");
    //         return;
    //     }

    //     // Sending login request
    //     setLoading(true);
    //     const url = "http://localhost:3000/api/auth/login";

    //     try {
    //         const response = await axios.post(url, formData, {
    //             // withCredentials: true,
    //         });
    //         const data = response.data;
    //         console.log(data);

    //         if (data && data.user) {
    //             setUserInfo(data);
    //             setError(false);
    //             setTimeout(() => {
    //                 setLoading(false);
    //                 navigate("/user");
    //             }, 500);
    //         } else {
    //             setError(true);
    //             setErrorMsg("Login failed, please try again");
    //             setLoading(false);
    //         }
    //     } catch (error) {
    //         setError(true);
    //         setErrorMsg(error?.response?.data?.message || "An error occurred");
    //         setLoading(false);
    //         console.log(error);
    //     }
    // };

    return (
        <section className="mx-auto  px-4 rounded-xl max-w-lg text-text-1 text-lg md:text-xl">
            <form className="flex flex-col justify-center items-center p-3 mt-8 ">
                <p className="font-bold text-4xl text-center m-3">Log In</p>

                <InputField
                    handleChange={handleChange}
                    type={"text"}
                    id={"username"}
                    lable={"Enter Username"}
                    className={`p-3 bg-slate-600 rounded-lg my-3 `}
                />
                <InputField
                    handleChange={handleChange}
                    type={"password"}
                    id={"password"}
                    lable={"Enter Password"}
                    className={`p-3 bg-slate-600 rounded-lg my-3`}
                />
                {/* display error */}
                {error ? (
                    <div className=" p-4 text-text-error rounded-md  bg-orange-100">
                        {errorMsg}
                    </div>
                ) : null}
                {/* Login button */}
                <button
                    className={`bg-third-bg p-3  rounded-lg my-3 disabled:opacity-60 cursor-pointer ${
                        disabled ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={(e) => handleSubmit(e)}
                >
                    {loading ? "Loading..." : "Log In"}
                </button>
            </form>
            <div className="text-center">
                <p>
                    New here ?{" "}
                    <Link className="underline mx-1" to={"/signup"}>
                        Signup
                    </Link>
                </p>
            </div>
            <hr className="p-2 mt-4 w-1/2 mx-auto" />
            <div className="flex justify-center">
                <div className="mx-3 cursor-pointer">
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                            // retrieve data from here
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
