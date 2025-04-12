import React from 'react';
import { FaUsers, FaPlaneDeparture, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-12 px-6 text-gray-800">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-purple-700 mb-6">About Us</h1>
                <p className="text-lg mb-10">
                    Welcome to <span className="text-pink-600 font-semibold">SkySwift Travels</span> — your one-stop platform for seamless travel planning, booking, and unforgettable experiences.
                </p>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <FaUsers className="text-pink-600 text-3xl mb-4" />
                        <h3 className="font-bold text-xl mb-2">Who We Are</h3>
                        <p>
                            We're a passionate team of travel experts dedicated to making your journey smooth, affordable, and full of joy.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <FaPlaneDeparture className="text-purple-600 text-3xl mb-4" />
                        <h3 className="font-bold text-xl mb-2">What We Do</h3>
                        <p>
                            From flight booking to hotel reservations and add-on services like insurance or lounges — we’ve got you covered.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <FaHeart className="text-red-500 text-3xl mb-4" />
                        <h3 className="font-bold text-xl mb-2">Why Choose Us</h3>
                        <p>
                            Transparent pricing, helpful support, and personalized options — all built with love for every traveler.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} SkySwift Travels. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
