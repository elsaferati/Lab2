import React from 'react';
import { FaPlaneArrival, FaCalendarAlt, FaClock, FaUserFriends } from 'react-icons/fa';

const FastTrack = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fasttrack-bg.jpg')" }}>
      <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg max-w-4xl w-full">
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

    
        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="text-pink-600 text-3xl mb-2">⏩</div>
            <p className="text-gray-700 text-sm">Our Fast Track passes give you access to a dedicated lane straight to the security checkpoint.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="text-pink-600 text-3xl mb-2">🕐</div>
            <p className="text-gray-700 text-sm">You can book Security Fast Track up to 1 hour prior to departure.</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="text-pink-600 text-3xl mb-2">✔️</div>
            <p className="text-gray-700 text-sm">Cut queues not corners and reach the departure lounge quicker.</p>
          </div>
        </div>

      </div>
    </div>

    
  );
};

export default FastTrack;
