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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">Fare Lock</h3>
            <p className="text-gray-600 mt-2">Lock your fare and keep your price even if it increases later.</p>
          </div>
          {/* Sitting Together */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">Sitting Together</h3>
            <p className="text-gray-600 mt-2">Choose your preferred seats and sit together with your friends and family.</p>
          </div>
          {/* Auto Check-In */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">Auto Check-In</h3>
            <p className="text-gray-600 mt-2">Skip the queue with our automatic check-in service.</p>
          </div>
          {/* Frequently Asked Questions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">Frequently Asked Questions</h3>
            <p className="text-gray-600 mt-2">Find answers to common questions about our services.</p>
          </div>
          {/* Wizz Account */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">Wizz Account</h3>
            <p className="text-gray-600 mt-2">Create and manage your Wizz account for easy booking and personalized offers.</p>
          </div>
        </div>
      </div>

      {/* Travel Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Travel Information</h2>
        <p className="text-gray-600 mt-2">Find essential travel information to prepare for your journey.</p>
        <Link to="/travel-info" className="text-purple-700 font-semibold mt-4 inline-block">Learn More</Link>
      </div>

      {/* About Us Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 mt-2">We are dedicated to providing safe, affordable, and enjoyable air travel experiences. Learn more about our mission and values.</p>
      </div>

      {/* Partner Services Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Partner Services</h2>
        <p className="text-gray-600 mt-2">We collaborate with trusted partners to bring you additional services like hotels, car rentals, and more.</p>
      </div>

      {/* Terms & Conditions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Terms & Conditions</h2>
        <p className="text-gray-600 mt-2">Read the terms and conditions of using our services to ensure a smooth experience.</p>
        <Link to="/terms" className="text-purple-700 font-semibold mt-4 inline-block">Read More</Link>
      </div>

      {/* Prices & Discounts Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Prices & Discounts</h2>
        <p className="text-gray-600 mt-2">Explore our competitive pricing and exclusive discounts for members and more.</p>
      </div>

      {/* Memberships Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Memberships</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* All You Can Fly */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">All You Can Fly</h3>
            <p className="text-gray-600 mt-2">Get unlimited flights with our "All You Can Fly" membership.</p>
          </div>
          {/* Discount Club */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-purple-700">Discount Club</h3>
            <p className="text-gray-600 mt-2">Join our Discount Club for exclusive offers and discounts on flights and services.</p>
          </div>
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
