import React from 'react';

const ChangeBooking = () => {
    return (
        <div className="min-h-screen bg-white text-black py-10 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-pink-600 mb-6">How do I change my booking?</h1>
            <p className="mb-4">
                You can change your booking by visiting the "My Bookings" section on your dashboard. 
                Select the booking you'd like to modify and follow the steps to update your itinerary. 
                Changes may incur additional charges depending on fare rules.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Log into your account.</li>
                <li>Go to <strong>My Bookings</strong>.</li>
                <li>Select the trip you want to modify.</li>
                <li>Click on <strong>Change</strong> and follow instructions.</li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
                For urgent help, please contact our 24/7 support via live chat or phone.
            </p>
        </div>
    );
};

export default ChangeBooking;
