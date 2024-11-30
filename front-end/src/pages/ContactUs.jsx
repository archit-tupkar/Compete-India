import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [errorMsg, setErrorMsg] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
        setError(false);
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            setError(true);
            setErrorMsg("All fields required");
        }
    };
    return (
        <section className="bg-main-bg text-text-1 py-3   px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-text-3 mb-8">
                    We would love to hear from you! Fill out the form below or
                    reach out to us directly.
                </p>

                {/* Contact Form */}
                <form className="bg-fourth-bg p-8 py-4 rounded-lg shadow-md">
                    <div className="mb-4 text-start">
                        <label
                            htmlFor="name"
                            className="block text-text-1 font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            id="name"
                            className="w-full p-3 bg-transparent border border-text-2 text-text-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-third-bg"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4 text-start">
                        <label
                            htmlFor="email"
                            className="block text-text-1 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => handleChange(e)}
                            type="email"
                            id="email"
                            className="w-full p-3 bg-transparent border border-text-2 text-text-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-third-bg"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-2 text-start">
                        <label
                            htmlFor="message"
                            className="block text-text-1 font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            onChange={(e) => handleChange(e)}
                            id="message"
                            rows="3"
                            className="w-full resize-none p-3 bg-transparent border border-text-2 text-text-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-third-bg"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    {error && (
                        <p className="text-text-error animate-pulse mb-1">
                            {errorMsg}
                        </p>
                    )}
                    <button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        className="w-full p-3 bg-third-bg text-text-1 font-semibold rounded-lg hover:bg-third-bg/80 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
