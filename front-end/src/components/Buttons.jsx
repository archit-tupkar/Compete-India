import React from "react";

export const ButtonPri = ({ children, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className={`bg-third-bg text-text-1 px-4 py-2 rounded-md hover:bg-third-bg transition duration-200 hover:opacity-90 `}
        >
            {children}
        </button>
    );
};
export const ButtonSec = ({ children, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="bg-third-bg text-t-1
         px-6 py-3 mx-2 rounded-md text-lg hover:bg-third-bg hover:opacity-95 transition duration-300"
        >
            {children}
        </button>
    );
};

export const SubmitButton = ({ lable, className }) => {
    return (
        <button
            className={`bg-third-bg p-3 rounded-lg my-3 disabled:opacity-60 cursor-pointer ${className}`}
        >
            {lable}
        </button>
    );
};
