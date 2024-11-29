import React from "react";
import { NavigateButton } from "./NavigateButton";

export const Navbar = () => {
    const isLogedIn = false;
    return (
        <div>
            <nav className="flex justify-around items-center">
                <div className="cursor-default">App Name/LOGO</div>
                <ul className="flex">
                    <li>
                        <NavigateButton path={"/user"} lable={"Home"} />
                    </li>
                    <li>
                        <NavigateButton lable={"About"} />
                    </li>
                    <li>
                        {isLogedIn ? (
                            <NavigateButton
                                path={"/user/profile"}
                                lable={"Profile"}
                            />
                        ) : (
                            <NavigateButton path={"/login"} lable={"Login"} />
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};
