import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";
export const InputField = ({
    type,
    lable,
    id,
    handleChange,
    value,
    showIcon,
    className,
}) => {
    const [show, setShow] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    };
    const TypeIs = type.toLowerCase() === "password" && show ? "text" : type;

    return (
        <div className="relative flex">
            <input
                value={value}
                required
                onChange={(e) => (handleChange ? handleChange(e) : () => {})}
                type={TypeIs}
                id={id}
                placeholder={lable}
                className={`p-3 pr-16 bg-slate-600 relative w-full rounded-lg my-3 ${className}`}
            />
            {type == "password" && !showIcon && (
                <button
                    className="absolute left-[90%] top-[38%] pointer"
                    onClick={(e) => handleShow(e)}
                    type="button"
                >
                    {show ? <FaEyeSlash /> : <FaRegEye />}
                </button>
            )}
        </div>
    );
};
