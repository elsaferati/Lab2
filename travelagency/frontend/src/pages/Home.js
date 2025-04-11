import React, { useState } from "react";
import FlightDeals from '../pages/FlightDeals';
import TravelPerks from '../pages/TravelPerks';
import NewsletterSignup from '../pages/NewsletterSignup';
import WizzBenefits from '../pages/WizzBenefits';


export default function FlightBooking() {
  const [tripType, setTripType] = useState("return");
  const [selectedTab, setSelectedTab] = useState("flights");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Tabs Section */}
        <div className="bg-white rounded-t-2xl px-6 pt-6 pb-2 flex gap-6 text-black font-semibold text-lg">
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
              selectedTab === "flights" ? "border-pink-600 text-pink-600" : "border-transparent"
            }`}
            onClick={() => setSelectedTab("flights")}
          >
            ✈️ Flights
          </div>
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
              selectedTab === "hotels" ? "border-blue-500 text-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedTab("hotels")}
          >
            🏨 Hotels
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded ml-1">-5%</span>
          </div>
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
              selectedTab === "parking" ? "border-purple-500 text-purple-500" : "border-transparent"
            }`}
            onClick={() => setSelectedTab("parking")}
          >
            
          </div>
        </div>

        {/* Flights Search Box */}
        {selectedTab === "flights" && (
          <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="trip"
                  checked={tripType === "return"}
                  onChange={() => setTripType("return")}
                />
                <label>Return</label>
                <input
                  type="radio"
                  name="trip"
                  checked={tripType === "one-way"}
                  onChange={() => setTripType("one-way")}
                />
                <label>One way</label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <input
                type="text"
                placeholder="Origin"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
              <input
                type="text"
                placeholder="Destination"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
                defaultValue="2025-04-10"
              />
              {tripType === "return" && (
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded-lg col-span-1"
                />
              )}
              <input
                type="number"
                min="1"
                defaultValue="1"
                placeholder="Passengers"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
            </div>

            <div className="mt-4 text-right">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Hotels Search Box */}
        {selectedTab === "hotels" && (
          <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <input
                type="text"
                placeholder="Where are you going?"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
                defaultValue="2025-04-10"
              />
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
                defaultValue="2025-04-11"
              />
              <input
                type="number"
                min="1"
                defaultValue="1"
                placeholder="Guests"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
            </div>

            <div className="mt-4 text-right">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>
        )}

       

        {/* Promo Section */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold leading-tight">
            MAY-MANIA: UP TO <span className="text-yellow-300">20%</span> OFF
          </h1>
          <p className="mt-4 text-lg">
            Go crazy with up to 20% off selected flights in May!
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
            Book now!
          </button>
          <p className="mt-4 text-sm text-gray-200">
            Restrictions apply, for further information read the Terms and Conditions.
          </p>
        </div>
      </div>

      {/* Extras Section */}
      <div className="bg-white">
        <FlightDeals />
        <TravelPerks setSelectedTab={setSelectedTab} />
        <NewsletterSignup />
        <WizzBenefits />
      </div>
    </div>
  );
}




