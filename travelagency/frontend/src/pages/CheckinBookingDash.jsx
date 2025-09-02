import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CheckinBookingDash() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null); // Booking being edited
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    flightDate: "",
    flightNumber: "",
  });

  const API_BASE = "http://localhost:8008/checkin_api/";
 // adjust path

  // Fetch all bookings
  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}read_bookings.php`);
      setBookings(res.data.data || []); // your PHP returns {success: true, data: [...]}
      setLoading(false);
    } catch (err) {
      setError("Failed to load bookings");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Delete booking
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`${API_BASE}delete_booking.php`, { data: { id } });
      setBookings(bookings.filter((b) => b.id !== id));
    } catch (err) {
      alert("Error deleting booking");
    }
  };

  // Start editing
  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setFormData({
      lastName: booking.last_name,
      firstName: booking.first_name,
      flightDate: booking.flight_date,
      flightNumber: booking.flight_number,
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingBooking(null);
    setFormData({ lastName: "", firstName: "", flightDate: "", flightNumber: "" });
  };

  // Update booking
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${API_BASE}update_booking.php`, {
        id: editingBooking.id,
        lastName: formData.lastName,
        firstName: formData.firstName,
        flightDate: formData.flightDate,
        flightNumber: formData.flightNumber,
      });
      const updatedBooking = res.data.data; // PHP returns {success: true, data: {...}}
      setBookings(
        bookings.map((b) => (b.id === updatedBooking.id ? updatedBooking : b))
      );
      handleCancelEdit();
    } catch (err) {
      alert("Error updating booking");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Check-in Bookings Dashboard</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Booking Ref</th>
                <th className="px-4 py-2 text-left">Passenger</th>
                <th className="px-4 py-2 text-left">Flight</th>
                <th className="px-4 py-2 text-left">Seat</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((b) => (
                  <tr key={b.id} className="border-t">
                    <td className="px-4 py-2">{b.id}</td>
                    <td className="px-4 py-2">{b.booking_reference}</td>
                    <td className="px-4 py-2">{b.first_name} {b.last_name}</td>
                    <td className="px-4 py-2">{b.flight_number}</td>
                    <td className="px-4 py-2">{b.seat_number || "-"}</td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleEdit(b)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(b.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {editingBooking && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Edit Booking: {editingBooking.booking_reference}</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block font-semibold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Flight Date</label>
                <input
                  type="date"
                  name="flightDate"
                  value={formData.flightDate}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold">Flight Number</label>
                <input
                  type="text"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
