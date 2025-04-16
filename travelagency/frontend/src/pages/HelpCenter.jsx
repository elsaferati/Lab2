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
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
        
        <ul className="space-y-6">
            {/* FAQ Item 1 */}
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Link to="/faq/change-booking" className="flex items-center gap-3">
                    <span className="bg-pink-600 text-white p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0l6 6m-6-6l6-6"></path>
                        </svg>
                    </span>
                    <h3 className="font-semibold text-lg text-pink-600 hover:text-pink-700">
                        How do I change my booking?
                    </h3>
                </Link>
                <p className="text-gray-600 mt-3">To change your booking, please follow these steps to make the required changes...</p>
            </li>

            {/* FAQ Item 2 */}
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Link to="/faq/baggage-policy" className="flex items-center gap-3">
                    <span className="bg-pink-600 text-white p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0l6 6m-6-6l6-6"></path>
                        </svg>
                    </span>
                    <h3 className="font-semibold text-lg text-pink-600 hover:text-pink-700">
                        What is the baggage policy?
                    </h3>
                </Link>
                <p className="text-gray-600 mt-3">Each passenger can carry one cabin bag and check-in luggage based on the flight class...</p>
            </li>

            {/* FAQ Item 3 */}
            <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Link to="/faq/request-refund" className="flex items-center gap-3">
                    <span className="bg-pink-600 text-white p-2 rounded-full">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m0 0l6 6m-6-6l6-6"></path>
                        </svg>
                    </span>
                    <h3 className="font-semibold text-lg text-pink-600 hover:text-pink-700">
                        How do I request a refund?
                    </h3>
                </Link>
                <p className="text-gray-600 mt-3">Refund requests can be made easily through our website, and the process is straightforward...</p>
            </li>
        </ul>

        {/* Still have questions? - Contact us Link */}
        <div className="mt-8 text-center">
            <p className="text-gray-600">
                Still have questions?{" "}
                <Link to="/contact-us" className="text-pink-600 font-semibold hover:underline text-lg">
                    Contact us
                </Link>
            </p>
        </div>
    </div>
)}


                {/* Contact Section */}
                {selectedTab === "contact" && (
                    <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-6">
                        {/* Promo Section */}
                        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 rounded-lg shadow-md mb-6 text-center">
                            <h2 className="text-2xl font-bold">🎉 May Maniac Deals</h2>
                            <p className="mt-1">Need help with your booking or refund? We're here for you 24/7!</p>
                        </div>

                        {/* Updated Contact Info */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-6">
                            If you need further assistance, our support team is here for you:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base">
                            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                                <span className="material-icons text-pink-600 mr-3">email</span>
                                <div>
                                    <div className="text-gray-800 font-medium">Email</div>
                                    <div className="text-purple-700">PrishtinaAir@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                                <span className="material-icons text-pink-600 mr-3">phone</span>
                                <div>
                                    <div className="text-gray-800 font-medium">Phone</div>
                                    <div className="text-purple-700">+38344555111</div>
                                </div>
                            </div>

                            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                                <span className="material-icons text-pink-600 mr-3">chat</span>
                                <div>
                                    <div className="text-gray-800 font-medium">Live Chat</div>
                                    <div className="text-purple-700">Available 24/7</div>
                                </div>
                            </div>
                        </div>

                        {/* Help Now Button */}
                        <button
                            onClick={() => setShowChat(true)}
                            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Get Help Now
                        </button>

                        {/* Live Chat */}
                        {showChat && <LiveChat onClose={() => setShowChat(false)} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HelpCenter;
