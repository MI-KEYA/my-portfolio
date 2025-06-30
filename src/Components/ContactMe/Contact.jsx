import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'your_service_id', // Replace with your EmailJS service ID
            'your_template_id', // Replace with your EmailJS template ID
            form.current,
            'your_public_key' // Replace with your EmailJS public key
        ).then(() => {
            alert('Email sent successfully!');
            form.current.reset();
        }).catch((error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
        });
    };

    return (
        <div className="w-11/12 md:w-4/5 mx-auto my-20">
            <h1 className="text-3xl font-bold text-center mb-10">Contact</h1>

            <div className="grid md:grid-cols-2 gap-10 border border-gray-300 rounded-2xl p-6 shadow-md bg-white">

                {/* Contact Info */}
                <div className="border border-gray-400 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-gray-700">📧 Email: moniakeya913@gmail.com</p>
                    <p className="text-gray-700">📍 Location: Dhaka, Bangladesh</p>
                    <p className="text-gray-700">📞 Phone: +8801XXXXXXXXX</p>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="border border-gray-400 p-6 rounded-xl  space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full border border-gray-300 p-3 rounded-lg"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-black cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-gray-700 transition"
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
