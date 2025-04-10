import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HelpCenter = () => {
    const [selectedTab, setSelectedTab] = useState("faq");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
            {/* Content of Help Center without Header/Footer */}
            <div className="max-w-4xl mx-auto py-10 px-4">
                {/* Tabs Section */}
                <div className="bg-white rounded-t-2xl px-6 pt-6 pb-2 flex gap-6 text-black font-semibold text-lg">
                    <div
                        className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
                            selectedTab === "faq" ? "border-pink-600 text-pink-600" : "border-transparent"
                        }`}
                        onClick={() => setSelectedTab("faq")}
                    >
                        ❓ FAQs
                    </div>
                    <div
                        className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
                            selectedTab === "contact" ? "border-blue-500 text-blue-500" : "border-transparent"
                        }`}
                        onClick={() => setSelectedTab("contact")}
                    >
                        📞 Contact Us
                    </div>
                </div>

                {/* FAQs Section */}
                {selectedTab === "faq" && (
                    <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <ul className="space-y-4">
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-semibold text-lg text-gray-700">How do I change my booking?</h3>
                                <p className="text-gray-500 mt-2">To change your booking, please follow these steps...</p>
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-semibold text-lg text-gray-700">What is the baggage policy?</h3>
                                <p className="text-gray-500 mt-2">Each passenger can carry one cabin bag...</p>
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="font-semibold text-lg text-gray-700">How do I request a refund?</h3>
                                <p className="text-gray-500 mt-2">Refund requests can be made through our website...</p>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Contact Us Section */}
                {selectedTab === "contact" && (
                    <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-4">If you need further assistance, please reach out to us:</p>
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-800 w-1/3">Email:</span>
                                <span className="text-purple-700">support@example.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-800 w-1/3">Phone:</span>
                                <span className="text-purple-700">+123456789</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-800 w-1/3">Live Chat:</span>
                                <span className="text-purple-700">Available 24/7</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Promo Section (Optional) */}
            <div className="mt-10 text-center px-4">
                <h1 className="text-4xl font-bold leading-tight text-white">
                    MAY-MANIA: UP TO <span className="text-yellow-300">20%</span> OFF
                </h1>
                <p className="mt-4 text-lg text-white">
                    Get 20% off on select services during May! Don't miss out.
                </p>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
                    Get Help Now!
                </button>
            </div>

            {/* Back to Home Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={() => navigate('/')}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg"
                >
                    ⬅ Back to Home
                </button>
            </div>

            {/* Footer will remain */}
        </div>
    );
};

export default HelpCenter;
