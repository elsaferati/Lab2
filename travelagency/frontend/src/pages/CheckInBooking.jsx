import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckInBooking = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        bookingReference: '',
        lastName: '',
        firstName: '',
        flightDate: '',
        flightNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic to handle submission (e.g., API call)
        alert('Booking submitted!');
        navigate('/confirmation'); // Navigate to a confirmation page after successful booking
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
            {/* Back Button */}
            <button
                onClick={handleBackClick}
                className="text-white bg-pink-600 py-2 px-4 rounded-lg mb-6"
            >
                &larr; Back
            </button>
            <div className="max-w-4xl mx-auto py-10 px-4">
                {/* Card for check-in and booking */}
                <div className="bg-white rounded-lg shadow-lg p-8 text-black">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Check-in & Booking</h2>

                    <form onSubmit={handleSubmit}>
                        {/* Booking Reference */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Booking Reference</label>
                            <input
                                type="text"
                                name="bookingReference"
                                value={formData.bookingReference}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                placeholder="Enter your booking reference"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>

                        {/* First Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>

                        {/* Flight Date */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Flight Date</label>
                            <input
                                type="date"
                                name="flightDate"
                                value={formData.flightDate}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                required
                            />
                        </div>

                        {/* Flight Number */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Flight Number</label>
                            <input
                                type="text"
                                name="flightNumber"
                                value={formData.flightNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md border border-gray-300"
                                placeholder="Enter your flight number"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg"
                            >
                                Check-in & Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckInBooking;
