import React from 'react';
import { Link } from 'react-router-dom';
import { FaSuitcaseRolling, FaWeightHanging, FaPlusCircle, FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const BaggagePolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 text-black py-12 px-6 max-w-5xl mx-auto">
            {/* Back Button */}
            <button
                onClick={() => window.history.back()}
                className="text-white bg-pink-600 py-2 px-4 rounded-lg mb-6"
            >
                &larr; Back
            </button>

            <h1 className="text-4xl font-bold text-pink-600 mb-4">Baggage Policy</h1>
            <p className="text-gray-700 text-lg mb-8">
                <FaInfoCircle className="inline-block text-pink-500 mr-2" />
                Understand our simple, traveler-friendly baggage rules.
            </p>

            {/* Info Section with Icons */}
            <div className="space-y-6 text-gray-800">
                <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-green-500 text-2xl mt-1" />
                    <p><strong>Included:</strong> One cabin bag and one personal item are included in your ticket — no extra cost!</p>
                </div>
                <div className="flex items-start gap-4">
                    <FaWeightHanging className="text-blue-500 text-2xl mt-1" />
                    <p><strong>Weight Limits:</strong> Cabin bag must not exceed 8kg and should fit within 55x40x20 cm. Personal item examples: purse, laptop bag, or small backpack.</p>
                </div>
                <div className="flex items-start gap-4">
                    <FaPlusCircle className="text-purple-600 text-2xl mt-1" />
                    <p><strong>Need extra?</strong> You can add more luggage while booking or anytime from your dashboard.</p>
                </div>
                <div className="flex items-start gap-4">
                    <FaExclamationTriangle className="text-yellow-500 text-2xl mt-1" />
                    <p><strong>Overweight Charges:</strong> Overweight or oversized bags may incur extra fees at the airport.</p>
                </div>
            </div>

            {/* Summary Table */}
            <div className="overflow-x-auto mt-10">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">Baggage Summary</h2>
                <table className="w-full border border-gray-300 rounded-lg shadow-sm">
                    <thead className="bg-pink-100">
                        <tr>
                            <th className="text-left py-2 px-4">Baggage Type</th>
                            <th className="text-left py-2 px-4">Max Size</th>
                            <th className="text-left py-2 px-4">Max Weight</th>
                            <th className="text-left py-2 px-4">Cost</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-t">
                            <td className="py-2 px-4">Personal Item</td>
                            <td className="py-2 px-4">40 x 30 x 15 cm</td>
                            <td className="py-2 px-4">3 kg</td>
                            <td className="py-2 px-4">Free</td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">Cabin Bag</td>
                            <td className="py-2 px-4">55 x 40 x 20 cm</td>
                            <td className="py-2 px-4">8 kg</td>
                            <td className="py-2 px-4">Free</td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">Checked Baggage</td>
                            <td className="py-2 px-4">158 cm (L+W+H)</td>
                            <td className="py-2 px-4">23 kg</td>
                            <td className="py-2 px-4">From $30</td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-2 px-4">Extra Bag</td>
                            <td className="py-2 px-4">158 cm</td>
                            <td className="py-2 px-4">23–32 kg</td>
                            <td className="py-2 px-4">From $50</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Helpful Navigation Buttons */}
            <div className="space-y-6 mt-12">
                <h2 className="text-2xl font-semibold text-pink-700 mb-2">Need More Help?</h2>
                <Link to="/check-in-booking">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                        🧳 Check-in & Add Baggage
                    </button>
                </Link>
                <Link to="/services">
                    <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700">
                        ✈️ Explore Travel Services
                    </button>
                </Link>
                <Link to="/faq/change-booking">
                    <button className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600">
                        🔄 How to Change a Booking
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BaggagePolicy;
