import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeBooking = () => {
    const navigate = useNavigate();
    const [showBookingCard, setShowBookingCard] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    // Simulate available bookings (you can replace this with real data)
    const bookings = [
        { id: 1, name: 'Booking 1', date: '2025-05-10' },
        { id: 2, name: 'Booking 2', date: '2025-06-15' },
        { id: 3, name: 'Booking 3', date: '2025-07-20' },
    ];

    const handleBookingChange = (bookingId) => {
        setSelectedBooking(bookings.find((booking) => booking.id === bookingId));
    };

    const handleBackClick = () => {
        navigate(-1); // Go one step back in the history
    };

    return (
        <div className="min-h-screen bg-white text-black py-10 px-4 max-w-4xl mx-auto">
            {/* Back Button */}
            <button
                onClick={handleBackClick}
                className="text-white bg-pink-600 py-2 px-4 rounded-lg mb-4"
            >
                &larr; Back
            </button>

            <h1 className="text-3xl font-bold text-pink-600 mb-6">How do I change my booking?</h1>

            <p className="mb-4">
                To change your booking, you first need to select an existing booking from your account. Once selected, 
                you will be able to modify your booking. Changes might incur additional charges.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Log into your account to access your bookings.</li>
                <li>Go to the <strong>My Bookings</strong> section.</li>
                <li>Select the booking you want to change.</li>
                <li>Click on <strong>Change</strong> and modify the details of your booking.</li>
            </ul>

            {/* Booking Selection */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Select a booking to change</h2>
                <ul className="space-y-2">
                    {bookings.map((booking) => (
                        <li key={booking.id} className="border p-4 rounded-lg">
                            <button
                                onClick={() => handleBookingChange(booking.id)}
                                className="text-blue-600 hover:underline"
                            >
                                {booking.name} - {booking.date}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Selected Booking Details */}
            {selectedBooking && (
                <div className="mt-6 p-6 bg-gray-100 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Selected Booking</h3>
                    <p><strong>Booking Name:</strong> {selectedBooking.name}</p>
                    <p><strong>Booking Date:</strong> {selectedBooking.date}</p>
                    <button
                        onClick={() => navigate(`/change-booking/${selectedBooking.id}`)}
                        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg"
                    >
                        Modify Booking
                    </button>
                </div>
            )}

            {/* Navigation Buttons to Services */}
            <div className="mt-8 flex gap-4">
                <button
                    onClick={() => navigate('/check-in-booking')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
                >
                    Check-in Booking
                </button>
                <button
                    onClick={() => navigate('/airport-parking')}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg"
                >
                    Add Baggage
                </button>
                <button
                    onClick={() => navigate('/services')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg"
                >
                    Explore Travel Services
                </button>
            </div>
        </div>
    );
};

export default ChangeBooking;
