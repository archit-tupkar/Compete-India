import React from "react";
import { companyName } from "../config/config";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="bg-main-bg text-text-1 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">
                    About Us
                </h1>

                {/* Mission Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is simple:{" "}
                        <strong>
                            to make quality exam preparation accessible to
                            everyone.
                        </strong>{" "}
                        In today’s competitive world, exam preparation can be
                        expensive and difficult to navigate. At {companyName},
                        we believe that learning should be accessible to all,
                        regardless of background or resources.
                    </p>
                    <p className="text-lg">
                        We provide a platform where anyone can access a wide
                        variety of mock exams for different subjects, for free.
                        All of our exams are designed to simulate real test
                        environments, giving you a true-to-life experience of
                        the challenges you’ll face in the real exam.
                    </p>
                    <p className="text-lg">
                        And because we are <strong>open-source</strong>, we
                        invite contributors from all over the world to join us
                        in improving and expanding our platform. By harnessing
                        the power of community, we can ensure that the platform
                        evolves and adapts to meet the needs of learners
                        everywhere.
                    </p>
                </section>

                {/* Why Choose Us Section */}
                <section className="  rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Why Choose Us?
                    </h2>
                    <ul className="space-y-4">
                        <li className="text-lg">
                            <strong>Free & Open-Source:</strong> {companyName}{" "}
                            is completely free to use, and as an open-source
                            project, we welcome contributions from developers
                            and educators alike to enhance the platform.
                        </li>
                        <li className="text-lg">
                            <strong>Realistic Mock Exams:</strong> We offer a
                            variety of mock exams across different subjects and
                            formats, designed to closely resemble the actual
                            exams you will take, helping you feel more prepared
                            and confident.
                        </li>
                        <li className="text-lg">
                            <strong>Collaborative Learning:</strong> Join a
                            global community of learners and contributors. Share
                            your knowledge, collaborate on improving the
                            platform, and benefit from the collective knowledge
                            of thousands of users.
                        </li>
                        <li className="text-lg">
                            <strong>Track Your Progress:</strong> Our platform
                            includes features to track your performance, review
                            your answers, and identify areas for improvement.
                            Stay motivated by seeing how far you’ve come.
                        </li>
                        <li className="text-lg">
                            <strong>Community-Driven:</strong> We believe in the
                            power of open-source. As part of our community, you
                            can suggest new features, report issues, or even
                            help create new mock exams for others to benefit
                            from.
                        </li>
                    </ul>
                </section>

                {/* Vision Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg">
                        At {companyName}, we are committed to breaking down
                        barriers to education. We aim to create the world’s most
                        comprehensive and accessible collection of mock exams,
                        powered by a passionate community of learners,
                        educators, and developers.
                    </p>
                    <p className="text-lg">
                        We envision a world where anyone can prepare for exams
                        confidently without the stress of expensive study
                        materials. Our platform is designed to help you achieve
                        your best, without financial constraints standing in
                        your way.
                    </p>
                </section>

                {/* Meet Our Team Section */}
                <section className="bg-third-bg p-6 rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Meet Our Team
                    </h2>
                    <ul className="space-y-6">
                        <li>
                            <strong>Mebmer Name</strong> – Designation
                            <p className="text-lg">
                                Member_name brings his expertise in software
                                development to build and maintain the platform.
                                His focus is on making the user experience
                                seamless and intuitive, ensuring that everyone
                                can easily access and navigate the mock exams.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Join Our Community Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                        Join Our Open-Source Community
                    </h2>
                    <p className="text-lg">
                        {companyName} is built by people like you. Whether
                        you’re a developer, educator, or passionate learner,
                        there’s a place for you in our community. By
                        contributing to our open-source platform, you can help
                        make exam preparation better for everyone.
                    </p>
                    <p className="text-lg">
                        If you’d like to contribute or have ideas for new
                        features or mock exams, feel free to{" "}
                        <Link
                            to={"/contact"}
                            className="text-third-bg underline"
                        >
                            get in touch with us
                        </Link>
                        . Join the conversation on{" "}
                        <Link
                            to={"https://github.com/competeindian/competeindia"}
                            className="text-third-bg underline"
                        >
                            GitHub
                        </Link>{" "}
                        and help us shape the future of exam preparation.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
