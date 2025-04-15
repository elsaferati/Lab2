import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LiveChat from '../components/LiveChat';

const HelpCenter = () => {
    const [selectedTab, setSelectedTab] = useState("faq");
    const [showChat, setShowChat] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
            <div className="max-w-4xl mx-auto py-10 px-4">
                {/* Tabs */}
                <div className="bg-white rounded-t-2xl px-6 pt-6 pb-2 flex gap-6 text-black font-semibold text-lg">
                    <div
                        className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${selectedTab === "faq" ? "border-pink-600 text-pink-600" : "border-transparent"}`}
                        onClick={() => setSelectedTab("faq")}
                    >
                        ❓ FAQs
                    </div>
                    <div
                        className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${selectedTab === "contact" ? "border-blue-500 text-blue-500" : "border-transparent"}`}
                        onClick={() => setSelectedTab("contact")}
                    >
                        📞 Contact Us
                    </div>
                </div>

                {/* FAQ Section */}
                {selectedTab === "faq" && (
                    <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <ul className="space-y-4">
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <Link to="/faq/change-booking">
                                    <h3 className="font-semibold text-lg text-pink-600 hover:underline">How do I change my booking?</h3>
                                </Link>
                                <p className="text-gray-500 mt-2">To change your booking, please follow these steps...</p>
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <Link to="/faq/baggage-policy">
                                    <h3 className="font-semibold text-lg text-pink-600 hover:underline">What is the baggage policy?</h3>
                                </Link>
                                <p className="text-gray-500 mt-2">Each passenger can carry one cabin bag...</p>
                            </li>
                            <li className="bg-white p-4 rounded-lg shadow-md">
                                <Link to="/faq/request-refund">
                                    <h3 className="font-semibold text-lg text-pink-600 hover:underline">How do I request a refund?</h3>
                                </Link>
                                <p className="text-gray-500 mt-2">Refund requests can be made through our website...</p>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Contact Section with Promo and Button */}
                {selectedTab === "contact" && (
                    <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-6">
                        {/* Promo Section */}
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-lg shadow-md mb-6 text-center">
                            <h2 className="text-2xl font-bold">🎉 May Maniac Deals</h2>
                            <p className="mt-1">Need help with your booking or refund? We're here for you 24/7!</p>
                        </div>

                        {/* Contact Info */}
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

                        {/* Help Now Button */}
                        <button
                            onClick={() => setShowChat(true)}
                            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Get Help Now
                        </button>

                        {/* Show Live Chat Component */}
                        {showChat && <LiveChat onClose={() => setShowChat(false)} />}

                    </div>
                )}
            </div>
        </div>
    );
};

export default HelpCenter;
