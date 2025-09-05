import React, { useEffect, useState } from "react";

const HotelTable = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingHotel, setEditingHotel] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    rating: "",
    ratingText: "",
    reviews: "",
    guests: "",
    bedroom: "",
    bath: "",
    bed: "",
    price: "",
  });

  // Merr të dhënat
  const fetchHotels = async () => {
    try {
      const res = await fetch("http://localhost:8080/Lab/Lab2/travelagency/backend/api/hotels.php");
      const data = await res.json();
      setHotels(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchHotels(); }, []);

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this hotel?")) return;
    try {
      const res = await fetch(`http://localhost:8080/Lab/Lab2/travelagency/backend/api/hotels.php?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        alert("Hotel deleted!");
        fetchHotels();
      } else {
        alert("Delete failed: " + (data.error || ""));
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting hotel!");
    }
  };
  

  // EDIT
  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
    setFormData({ ...hotel });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingHotel) return;
  
    await fetch(`http://localhost:8080/Lab/Lab2/travelagency/backend/api/hotels.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, id: editingHotel.id }) // include id
    });
  
    setEditingHotel(null);
    fetchHotels();
  };  

  if (loading) return <p>Loading...</p>;

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
        <thead className="bg-gray-100">
          <tr>
            {["ID","Name","City","Rating","Reviews","Guests","Bedroom","Bath","Bed","Price","Edit","Delete"].map(h => (
              <th key={h} className="px-3 py-2 text-left font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hotels.map(hotel => (
            <tr key={hotel.id} className="border-b hover:bg-gray-50">
              <td className="px-3 py-1">{hotel.id}</td>
              <td className="px-3 py-1">{hotel.name}</td>
              <td className="px-3 py-1">{hotel.city}</td>
              <td className="px-3 py-1">{hotel.rating}</td>
              <td className="px-3 py-1">{hotel.reviews}</td>
              <td className="px-3 py-1">{hotel.guests}</td>
              <td className="px-3 py-1">{hotel.bedroom}</td>
              <td className="px-3 py-1">{hotel.bath}</td>
              <td className="px-3 py-1">{hotel.bed}</td>
              <td className="px-3 py-1">{hotel.price}</td>
              <td className="px-3 py-1">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded" onClick={() => handleEdit(hotel)}>Edit</button>
              </td>
              <td className="px-3 py-1">
                <button className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded" onClick={() => handleDelete(hotel.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-72 max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-3">Edit Hotel</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              {Object.keys(formData).filter(k => k !== "id").map(key => (
                <div key={key}>
                  <label className="block text-sm">{key}</label>
                  <input type="text" name={key} value={formData[key]} onChange={handleChange} className="border w-full px-2 py-1 rounded"/>
                </div>
              ))}
              <div className="flex justify-end gap-2 mt-2">
                <button type="button" className="px-4 py-1 bg-gray-400 rounded" onClick={() => setEditingHotel(null)}>Cancel</button>
                <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelTable;
