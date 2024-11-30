import React from "react";
import { Link } from "react-router-dom";

export const NavigateButton = ({ path, label, handleClick, className }) => {
    return (
        // <div className=" hover:border-b inset-1">
        <button
            onClick={handleClick ? (e) => handleClick(e) : () => {}}
            className={`p-1 px-2 m-3 cursor-pointer md:text-xl rounded-lg border-b-2 border-transparent hover:rounded-b-none hover:border-third-bg ${className}`}
        >
            <Link className="" to={path}>
                {label}
            </Link>
        </button>
        // </div>
    );
};
