
import React from 'react';
import { FaPlaneArrival, FaCalendarAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AirportLounge = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Tab Selector */}
      <div className="flex justify-center mb-10">
      <div className="bg-white rounded-lg shadow-md inline-flex overflow-hidden">
  <Link to="/fast-track">
    <button className="px-6 py-3 font-semibold text-pink-700 hover:bg-pink-100">SECURITY FAST TRACK</button>
  </Link>
  <Link to="/lounge">
    <button className="px-6 py-3 font-semibold bg-pink-600 text-white">AIRPORT LOUNGE</button>
  </Link>
</div>
      </div>

      {/* Form Section (same as FastTrack) */}
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full">
            <label className="font-semibold block mb-1">Airport</label>
            <div className="flex items-center border p-2 rounded">
              <FaPlaneArrival className="mr-2 text-pink-600" />
              <input type="text" placeholder="Aberdeen (ABZ)" className="w-full outline-none" />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold block mb-1">Date</label>
            <div className="flex items-center border p-2 rounded">
              <FaCalendarAlt className="mr-2 text-pink-600" />
              <input type="date" className="w-full outline-none" />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold block mb-1">Time</label>
            <div className="flex items-center border p-2 rounded">
              <FaClock className="mr-2 text-pink-600" />
              <input type="time" className="w-full outline-none" />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold block mb-1">Passengers</label>
            <div className="flex items-center border p-2 rounded">
              <FaUserFriends className="mr-2 text-pink-600" />
              <select className="w-full outline-none">
                <option>1x Adults</option>
                <option>2x Adults</option>
                <option>3x Adults</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">Search</button>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl mb-2">🍽️</div>
          <p>Access premium lounges with food, drinks, WiFi, and more.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl mb-2">💼</div>
          <p>Enjoy quiet spaces to work or relax before your flight.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl mb-2">🛋️</div>
          <p>Stretch out and unwind in comfy lounge seating before boarding.</p>
        </div>
      </div>
    </div>
  );
};

export default AirportLounge;
