import React from "react";

const Status = ({}) => {
    return (
        <section className="h-screen absolute inset-0 flex items-center justify-center m-auto text-text-1 px-6 py-12">
            {/* <div className="absolute inset-0  bg-black opacity-70 z-10"></div> */}
            <div className="bg-fourth-bg relative flex flex-col z-20 items-center justify-center text-center p-6">
                <div className="absolute top-2 right-7 cursor-pointer">x</div>
                <div className="text-2xl p-2 m-3">Icon</div>
                <div className="text-3xl p-2 m-3">Title</div>
                <div className="text-xl p-2 m-3">Description</div>
                <div className="text-xl p-2 m-3">Other Info</div>
            </div>
        </section>
    );
};

export default Status;
