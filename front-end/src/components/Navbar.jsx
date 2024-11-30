import React, { useEffect, useState } from "react";
import { NavigateButton } from "./NavigateButton";
import { useRecoilValue } from "recoil";
import { isLogedInAtom, userInfoAtom } from "../atoms/user.atom";
import { Link, Navigate } from "react-router-dom";
const companyName = import.meta.env.VITE_COMPANY_NAME;

export const Navbar = () => {
    const user = useRecoilValue(userInfoAtom);
    const isLogedInValue = useRecoilValue(isLogedInAtom);
    const [isLogedIn, setIsLogedIn] = useState(isLogedInValue);
    useEffect(() => {
        if (user.username || localStorage?.getItem("userInfo")) {
            setIsLogedIn(true);
        } else {
            setIsLogedIn(false);
        }
    }, [user]);

    return (
        <section className="text-text-1 ">
            {
                <nav className="flex justify-between items-center mx-3 px-3">
                    <h1 className="cursor-default text-2xl font-semibold p-3 m-2">
                        <Link to={"/"}>{companyName}</Link>
                    </h1>
                    <ul className="flex">
                        <li>
                            <NavigateButton
                                path={isLogedIn ? "/dashboard" : "/"}
                                label={"Home"}
                            />
                        </li>
                        <li>
                            <NavigateButton path={"/about"} label={"About"} />
                        </li>
                        <li>
                            <NavigateButton
                                path={"/contact"}
                                label={"Contact"}
                            />
                        </li>
                        <li>
                            {isLogedIn ? (
                                <NavigateButton
                                    path={"/profile"}
                                    label={"Profile"}
                                    // className={`bg-third-bg hover:opacity-[95%]  hover:rounded-lg`}
                                />
                            ) : (
                                <NavigateButton
                                    path={"/login"}
                                    label={"Login"}
                                    className={`bg-third-bg hover:opacity-[95%]  hover:rounded-xl`}
                                />
                            )}
                        </li>
                    </ul>
                </nav>
            }
        </section>
    );
};
