import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import z from "zod";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMailSharp } from "react-icons/io5";

export const Login = () => {
    const navigate = useNavigate();
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
        // fields are empty
        if (!formData.username || !formData.password) {
            setError(true);
            setErrorMsg("Both fields required");
            return;
        }
        // handle format
        console.log(format.parseSync(formData));

        if (format.parse(formData)) {
            console.log("zod error");
        }

        // send request to login
        setLoading(true);
        const url = "";
        try {
            const response = await axios.post(url, formData, {
                withCredentials: true,
            });
            const data = response.data;
            setUserInfo(data);
            setError(false);
            setTimeout(() => {
                setLoading(false);
                navigate("/user");
            }, 500);
        } catch (error) {
            setError(true);
            setErrorMsg(error?.response.statusText);
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <section className="mx-auto pb-4 px-4 rounded-xl max-w-lg text-text-1 text-lg md:text-xl">
            <form className="flex flex-col p-3 mt-24">
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
                    <div className=" p-4 rounded-md  bg-orange-100">
                        {errorMsg}
                    </div>
                ) : null}
                {/* Login button */}
                <button
                    className={`bg-third-bg p-3 rounded-lg my-3 disabled:opacity-60 cursor-pointer ${
                        disabled ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={(e) => handleSubmit(e)}
                >
                    {loading ? "Loading..." : "Log In"}
                </button>
            </form>
            <div className="text-center">
                <p>
                    Already have an account?
                    <Link className="underline mx-1" to={"/signup"}>
                        Signup
                    </Link>
                </p>
            </div>
            <hr className="p-2 mt-4 w-1/2 mx-auto" />
            <div className="flex justify-center">
                <div className="mx-3 cursor-pointer">
                    <FaGoogle />
                </div>
                <div className="mx-3 cursor-pointer">
                    <IoMailSharp />
                </div>
            </div>
        </section>
    );
};
