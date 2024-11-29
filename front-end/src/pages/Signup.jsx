import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMailSharp } from "react-icons/io5";

export const Signup = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [errorMsg, setErrorMsg] = useState(undefined);
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setError(false);
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleReEnter = (e) => {
        setError(false);
        if (e.target.value === formData.password) {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value,
            });
            setDisabled(false);
            setError(false);
            setErrorMsg("");
        } else {
            setErrorMsg("passwords didnt match");
            setError(true);
            setDisabled(true);
        }
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
        setLoading(true);
        // send signup request
        const url = "";
        try {
            const response = await axios.post(url, formData);
            const data = response.data;
            setError(false);
            setLoading(false);
            // ask user to login after signup
            navigate("/login");
        } catch (error) {
            setError(true);
            setErrorMsg(error?.response?.statusText);
            setLoading(false);

            console.log(error);
        }
    };

    return (
        <div className="mx-auto pb-4 px-4   rounded-xl max-w-lg text-text-1 text-lg md:text-xl">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col p-3 mt-24"
            >
                <p className="font-bold text-4xl text-center m-3">Sign Up</p>

                <InputField
                    required
                    handleChange={handleChange}
                    type={"text"}
                    id={"username"}
                    lable={"Username"}
                />
                <InputField
                    required
                    handleChange={handleChange}
                    type={"email"}
                    id={"email"}
                    lable={"Email"}
                />
                <InputField
                    required
                    handleChange={handleChange}
                    type={"password"}
                    id={"password"}
                    lable={"Password"}
                />
                <InputField
                    required
                    handleChange={handleReEnter}
                    type={"password"}
                    id={"re-password"}
                    lable={"Confirm Password"}
                    showIcon={true}
                />
                {error ? (
                    <div className=" p-4 rounded-md text-red-600 bg-orange-100">
                        {errorMsg}
                    </div>
                ) : null}
                <button
                    disabled={disabled}
                    className={`bg-third-bg p-3 rounded-lg my-3 disabled:opacity-60 ${
                        disabled ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>
            </form>
            <div className="text-center">
                <p>
                    Already have an account?
                    <Link className="underline mx-1" to={"/login"}>
                        Login
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
        </div>
    );
};

{
    /* <InputField
  handleChange={handleChange}
  type={"password"}
  id={"password"}
  lable={"Password"}
/>
<InputField
  handleChange={handleReEnter}
  type={"password"}
  id={"re-password"}
  lable={"Re-Enter Password"}
/> */
}
