import React from "react";
import { Navbar } from "./Navbar";
import { discordIcon, githubIcon, twitterIcon } from "../config/socials";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import NewsLetter from "./NewsLetter";

const companyName = import.meta.env.VITE_COMPANY_NAME;

export const Footer = () => {
    return (
        <footer className="bg-fourth-bg text-text-1 py-8 md:px-16">
            <div className="container mx-auto px-4">
                {/* Footer Top Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-2xl font-semibold">
                            {companyName}
                        </h3>
                        <p className="text-text-3 mt-2">
                            We provide amazing services to help your business
                            grow.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Follow Us</h4>
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="https://github.com"
                                className="text-text-3 hover:text-blue-600 transition duration-200"
                            >
                                {githubIcon}
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-text-3 hover:text-blue-400 transition duration-200"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://discord.com"
                                className="text-text-3 hover:text-pink-600 transition duration-200"
                            >
                                {discordIcon}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-700 flex justify-center pt-6">
                    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h5 className="font-semibold mb-2">Quick Links</h5>
                            <ul>
                                <li>
                                    <a
                                        href="/about"
                                        className="text-text-3 hover:text-text-1 transition duration-200"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services"
                                        className="text-text-3 hover:text-text-1 transition duration-200"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="text-text-3 hover:text-text-1 transition duration-200"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-2">Contact Us</h5>
                            <ul className="flex flex-col">
                                <li className="text-text-3">
                                    Email: support@example.com
                                </li>
                                <li className="text-text-3">
                                    Phone: (123) 456-7890
                                </li>
                                <li className="text-text-3">
                                    Address: 123 Street Name, City, Country
                                </li>
                            </ul>
                        </div>
                        <NewsLetter />
                    </div>
                </div>
            </div>
            <div className="text-center text-text-3 text-sm pt-4">
                <p>&copy; 2024 {companyName}. All rights reserved.</p>
            </div>
        </footer>
    );
};
