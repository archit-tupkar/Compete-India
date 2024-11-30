import React from "react";

const NewsLetter = () => {
    return (
        <div className="">
            <h5 className="font-semibold mb-2">Subscribe to Our Newsletter</h5>
            <form action="#" method="POST">
                <div className="flex border w-max self-center  rounded-2xl overflow-hidden">
                    <input
                        className="border-none outline-none bg-transparent p-2 px-4 "
                        type="email"
                        name="email"
                        id="newsletter-email"
                        placeholder="Enter your Email"
                    />
                    <button className="bg-third-bg   border-none p-2">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsLetter;
