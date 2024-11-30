import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./Login.jsx";
import { Signup } from "./Signup.jsx";
import { Landing } from "./Landing.jsx";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";
import { Navbar } from "../components/Navbar.jsx";
import ExamDetailts from "./ExamDetailts.jsx";
import TestScreen from "./TestScreen.jsx";
import Error from "./Error.jsx";
import Status from "../components/Status.jsx";
import { ToastContainer, toast } from "react-toastify";
import { RecoilRoot, useRecoilValue } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard.jsx";
import { Profile } from "./Profile.jsx";
import { userInfoAtom } from "../atoms/user.atom.js";

export const notify = (status, message, position) => {
    toast[status](message, {
        position: position,
    });
};
const App = () => {
    const userInfInBrowser = JSON.parse(localStorage?.getItem("userInfo"));
    const user = useRecoilValue(userInfoAtom);
    const [isLogedIn, setIsLogedIn] = useState(false);
    console.log(userInfInBrowser);
    console.log(isLogedIn);
    useEffect(() => {
        if (userInfInBrowser || user?.username) {
            setIsLogedIn(true);
        } else {
            setIsLogedIn(false);
        }
    }, [user]);

    return (
        <main>
            <BrowserRouter>
                <ToastContainer />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                        path="/login"
                        element={
                            !isLogedIn ? (
                                <Login />
                            ) : (
                                <Navigate to={"/dashboard"}></Navigate>
                            )
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/status" element={<Status />} />
                    {/* --protected--- */}
                    <Route
                        path={`/test-details/:testId`}
                        element={<ExamDetailts />}
                    />
                    <Route
                        path={`/dashboard`}
                        element={
                            isLogedIn ? (
                                <Dashboard />
                            ) : (
                                <Navigate to={"/login"} />
                            )
                        }
                    />
                    <Route
                        path={`/take-test/:testId`}
                        element={<TestScreen />}
                    />
                    <Route path={`/profile`} element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};
export default App;
