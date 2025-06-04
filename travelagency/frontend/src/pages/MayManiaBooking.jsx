import React from 'react';

export default function MayManiaBooking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 text-black p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          🎉 May-Mania Booking Offer
        </h2>
        <p className="text-center text-lg mb-6">
          Book now and enjoy <strong>20% off selected flights</strong> throughout May!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Origin"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Destination"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="date"
            className="border border-gray-300 p-3 rounded-lg"
            defaultValue="2025-05-10"
          />
          <input
            type="number"
            min="1"
            defaultValue="1"
            placeholder="Passengers"
            className="border border-gray-300 p-3 rounded-lg"
          />
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Book with 20% OFF
          </button>
        </div>
      </div>
    </div>
  );
}
