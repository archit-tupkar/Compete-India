import React from "react";

const HamMenu = () => {
    return (
        <nav className="flex justify-between items-center">
            <h1 className="cursor-default text-2xl font-semibold p-3 m-2">
                {companyName}
            </h1>
            <ul className="flex">
                <li>
                    <NavigateButton path={"/"} label={"Home"} />
                </li>
                <li>
                    <NavigateButton path={"/about"} label={"About"} />
                </li>
                <li>
                    <NavigateButton path={"/contact"} label={"Contact"} />
                </li>
                <li>
                    {isLogedIn ? (
                        <NavigateButton
                            path={"/user/profile"}
                            label={"Profile"}
                        />
                    ) : (
                        <NavigateButton
                            path={"/login"}
                            label={"Login"}
                            className={`bg-third-bg hover:opacity-[95%] rounded-b-lg`}
                        />
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default HamMenu;
