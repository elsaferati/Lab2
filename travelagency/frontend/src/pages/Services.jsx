import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
        <p className="text-lg mt-4 text-white">Explore our services and features designed to make your journey smoother and more enjoyable.</p>
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">App Services</h2>
        <div className="grid grid-cols-2 gap-8 text-black">
          {/* Fare Lock */}
          <Link to="/services/fare-lock" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 block">
            <h3 className="font-semibold text-lg text-purple-700">Fare Lock</h3>
            <p className="text-gray-600 mt-2">
              Lock your fare and keep your price even if it increases later.
            </p>
          </Link>
          {/* Sitting Together */}
          <Link
            to="/services/sitting-together"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 block"
          >
            <h3 className="font-semibold text-lg text-purple-700">Sitting Together</h3>
            <p className="text-gray-600 mt-2">Choose your preferred seats and sit together with your friends and family.</p>
          </Link>
          {/* Auto Check-In */}
          <Link to="/services/auto-check-in" className="bg-white p-6 rounded-lg shadow-md block hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-lg text-purple-700">Auto Check-In</h3>
            <p className="text-gray-600 mt-2">Skip the queue with our automatic check-in service.</p>
          </Link>
          {/* Frequently Asked Questions */}
          <Link to="/help-center">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
              <h3 className="font-semibold text-lg text-purple-700">Frequently Asked Questions</h3>
              <p className="text-gray-600 mt-2">Find answers to common questions about our services.</p>
            </div>
          </Link>
          {/* Wizz Account */}
          <Link to="/services/wizz-account">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="font-semibold text-lg text-purple-700">Wizz Account</h3>
              <p className="text-gray-600 mt-2">Create and manage your Wizz account for easy booking and personalized offers.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Travel Information Section */}
      <Link to="/travel-info">
        <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto hover:bg-gray-100 transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Travel Information</h2>
          <p className="text-gray-600 mt-2">Find essential travel information to prepare for your journey.</p>
          <span className="text-purple-700 font-semibold mt-4 inline-block">Learn More</span>
        </div>
      </Link>

      {/* About Us Section */}
      <Link to="/about-us">
        <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto hover:bg-gray-100 transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-600 mt-2">
            We are dedicated to providing safe, affordable, and enjoyable air travel experiences. Learn more about our mission and values.
          </p>
        </div>
      </Link>

      {/* Partner Services Section */}
      <Link to="/services/partners">
        <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Partner Services</h2>
          <p className="text-gray-600 mt-2">We collaborate with trusted partners to bring you additional services like hotels, car rentals, and more.</p>
        </div>
      </Link>

      {/* Terms &amp; Conditions Section */}
      <Link to="/terms">
        <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto hover:bg-gray-100 transition duration-300 cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Terms &amp; Conditions</h2>
          <p className="text-gray-600 mt-2">Read the terms and conditions of using our services to ensure a smooth experience.</p>
          <span className="text-purple-700 font-semibold mt-4 inline-block">Read More</span>
        </div>
      </Link>

      <Link to="/services/discounts">
        <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Prices &amp; Discounts</h2>
          <p className="text-gray-600 mt-2">Explore our competitive pricing and exclusive discounts for members and more.</p>
        </div>
      </Link>

      {/* Memberships Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Memberships</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* All You Can Fly */}
          <Link to="/allyoucanfly">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
              <h3 className="font-semibold text-lg text-purple-700">All You Can Fly</h3>
              <p className="text-gray-600 mt-2">
                Get unlimited flights with our &quot;All You Can Fly&quot; membership.
              </p>
            </div>
          </Link>
          {/* Discount Club */}
          <Link to="/discount-club">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
              <h3 className="font-semibold text-lg text-purple-700">Discount Club</h3>
              <p className="text-gray-600 mt-2">
                Join our Discount Club for exclusive offers and discounts on flights and services.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white py-4 mt-10 text-center">
        <p>&copy; 2025 Your Airline Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default ServicesPage;
