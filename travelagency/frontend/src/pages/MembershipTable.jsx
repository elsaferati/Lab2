import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/Lab/Lab2/travelagency/backend/api/memberships.php";

const MembershipTable = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ plan_name: "", price: "" });

  // Fetch data from API
  const fetchMemberships = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMemberships(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching memberships:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  // Delete membership
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this membership?")) return;
    try {
      const res = await fetch(`${API_URL}?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setMemberships(memberships.filter((m) => m.id !== id));
      } else {
        alert("Error deleting membership");
      }
    } catch (err) {
      console.error(err);
      alert("Connection error!");
    }
  };

  // Start editing
  const handleEdit = (m) => {
    setEditId(m.id);
    setEditData({ plan_name: m.plan_name, price: m.price });
  };

  // Save edit
  const handleSave = async (id) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST", // duhet ndryshuar PHP për të mbështetur UPDATE
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...editData }),
      });
      const data = await res.json();
      if (data.success) {
        setMemberships(
          memberships.map((m) => (m.id === id ? { ...m, ...editData } : m))
        );
        setEditId(null);
      } else {
        alert("Error updating membership");
      }
    } catch (err) {
      console.error(err);
      alert("Connection error!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        All Membership Discounts 
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg">
          <thead className="bg-purple-100 text-purple-700">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Plan Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Created At</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {memberships.map((m, index) => (
              <tr key={m.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">
                  {editId === m.id ? (
                    <input
                      className="border rounded px-2 py-1 w-full"
                      value={editData.plan_name}
                      onChange={(e) =>
                        setEditData({ ...editData, plan_name: e.target.value })
                      }
                    />
                  ) : (
                    m.plan_name
                  )}
                </td>
                <td className="py-3 px-6">
                  {editId === m.id ? (
                    <input
                      className="border rounded px-2 py-1 w-full"
                      value={editData.price}
                      onChange={(e) =>
                        setEditData({ ...editData, price: e.target.value })
                      }
                    />
                  ) : (
                    m.price
                  )}
                </td>
                <td className="py-3 px-6">{m.user_name || "Guest"}</td>
                <td className="py-3 px-6">{m.created_at}</td>
                <td className="py-3 px-6 space-x-2">
                  {editId === m.id ? (
                    <button
                      onClick={() => handleSave(m.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(m)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(m.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:opacity-80"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipTable;
