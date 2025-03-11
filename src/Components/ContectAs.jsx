import React from "react";
import Footer from "./Footer";

const ContactAs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8 text-center max-w-md">
        Have any questions or need help? Feel free to reach out to us.
      </p>
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-full">
          Send Message
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactAs;
