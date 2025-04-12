import React from 'react';
import { Link } from 'react-router-dom';
import { FaSuitcaseRolling, FaWeightHanging, FaPlusCircle } from 'react-icons/fa';

const BaggagePolicy = () => {
    return (
        <div className="min-h-screen bg-white text-black py-12 px-6 max-w-4xl mx-auto">
            {/* Back Button */}
            <button
                onClick={() => window.history.back()}
                className="text-white bg-pink-600 py-2 px-4 rounded-lg mb-6"
            >
                &larr; Back
            </button>

            <h1 className="text-4xl font-bold text-pink-600 mb-6">Baggage Policy</h1>
            
            <p className="text-gray-700 mb-6 text-lg">
                We're here to make your travel smoother. Here's what you need to know about our baggage rules:
            </p>

            <div className="space-y-6 text-gray-800">
                <div className="flex items-start gap-4">
                    <FaSuitcaseRolling className="text-pink-600 text-2xl mt-1" />
                    <p><strong>Included:</strong> 1 cabin bag and 1 personal item per passenger — totally free!</p>
                </div>
                <div className="flex items-start gap-4">
                    <FaWeightHanging className="text-pink-600 text-2xl mt-1" />
                    <p><strong>Cabin bag size:</strong> Max 8kg and up to 55x40x20 cm. Your personal item can be a purse, laptop bag, or small backpack.</p>
                </div>
                <div className="flex items-start gap-4">
                    <FaPlusCircle className="text-pink-600 text-2xl mt-1" />
                    <p><strong>Need more space?</strong> Add extra bags while booking or anytime later in your account dashboard.</p>
                </div>
            </div>

            {/* Quick Links - Buttons */}
            <div className="space-y-8 mt-8"> {/* Increased space between buttons */}
                <Link to="/check-in-booking">
                    <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none">
                        Check in and Add Baggage
                    </button>
                </Link>
                <Link to="/services">
                    <button className="w-full bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none">
                        Explore Travel Services
                    </button>
                </Link>
                <Link to="/faq/change-booking">
                    <button className="w-full bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 focus:outline-none">
                        How to Change a Booking
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BaggagePolicy;
