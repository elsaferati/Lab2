import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestRefund = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // Replace this old one:
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Refund request submitted!');
  // };

  // With this new async function:
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost/api/submit_refund.php', {  // <-- Correct URL here
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.success);
            setFormData({ name: '', email: '', reason: '' });
        } else {
            alert(result.error || 'Something went wrong');
        }
    } catch (error) {
        alert('Network error. Please try again later.');
    }
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
            <h1 className="text-3xl font-bold text-pink-600 mb-6">How do I request a refund?</h1>

            <p className="mb-4">
                Refund requests can be made directly on our website. Navigate to the &quot;My Bookings&quot; section and select the booking 
                for which you want to request a refund. Follow the instructions provided.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="reason" className="block text-gray-700 font-semibold">Reason for Refund</label>
                    <textarea
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows="4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg"
                >
                    Submit Refund Request
                </button>
            </form>
        </div>
    );
};

export default RequestRefund;
