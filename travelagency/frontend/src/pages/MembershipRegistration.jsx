import React from 'react';

const MembershipRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Become a Member</h2>
        <p className="text-center mb-6 text-gray-600">
          Fill in the details below to unlock unlimited flights and exclusive offers!
        </p>

        <form className="space-y-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Full Name"
          />
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Password"
          />
          <button className="w-full bg-sky-600 text-white font-semibold py-3 rounded-full hover:bg-sky-700 transition">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipRegistration;
