import React from "react";
import { Navbar } from "../components/Navbar";
import { NavigateButton } from "../components/NavigateButton";
import { Footer } from "../components/Footer";
import { ButtonPri, ButtonSec } from "../components/Buttons";
import { Card } from "../components/Card";
import Status from "../components/Status";

export const Landing = () => {
    return (
        <main className="bg-main-bg text-text-1  ">
            <section
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://theprotocolgroup.co.uk/wp-content/uploads/2024/02/discussion-protocol-group.jpg')", // Replace with your image URL
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                {/* Overlay to make text stand out */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                        Discover amazing content and solutions. Join us and be
                        part of something great.
                    </p>
                    <div className="flex">
                        <ButtonSec>Get Started</ButtonSec>
                    </div>
                </div>
            </section>
            <section className="grid ">
                <div className="text-2xl font-bold text-center p-6 m-3">
                    Exams
                </div>
                <div className="flex justify-evenly flex-wrap">
                    <Card
                        title={"dsdsd"}
                        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias iste deserunt commodi, esse magnam corporis!`}
                        image={
                            "https://theprotocolgroup.co.uk/wp-content/uploads/2024/02/discussion-protocol-group.jpg"
                        }
                        buttonText={"Hello"}
                    />
                    <Card
                        title={"dsdsd"}
                        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias iste deserunt commodi, esse magnam corporis!`}
                        image={
                            "https://theprotocolgroup.co.uk/wp-content/uploads/2024/02/discussion-protocol-group.jpg"
                        }
                        buttonText={"Hello"}
                    />
                    <Card
                        title={"dsdsd"}
                        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias iste deserunt commodi, esse magnam corporis!`}
                        image={
                            "https://theprotocolgroup.co.uk/wp-content/uploads/2024/02/discussion-protocol-group.jpg"
                        }
                        buttonText={"Hello"}
                    />
                </div>
            </section>
            {/* <section>testimonials</section> */}
            <Footer />
        </main>
    );
};

// <button
//     onClick={onButtonClick}
//     className="bg-third-bg text-text-1 px-4 py-2 rounded-md hover:bg-third-bg transition duration-200"
// >

// </button>
