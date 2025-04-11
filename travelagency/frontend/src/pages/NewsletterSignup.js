import React from "react";
import staytuned from '../assets/images/staytuned.jpg';

export default function NewsletterSignup() {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-md">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
      <img
      src={staytuned}
      alt="Celebration"
      className="rounded-xl w-full h-48 object-cover"
    />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Stay tuned!</h2>
        <p className="text-gray-700 mb-4">
          Subscribe to our newsletter and be the first to know about new routes and special offers.
        </p>

        {/* Form Inputs */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-4 text-sm text-gray-700">
          <input type="checkbox" id="subscribe" className="mt-1" />
          <label htmlFor="subscribe">
            By clicking this checkbox, I accept receiving newsletters and offers from Wizz Air.
            Details in the <a href="#" className="text-pink-600 underline">Privacy Notice</a>.
          </label>
        </div>

        {/* Submit Button */}
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
}

