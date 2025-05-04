import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    countryCode: '',
    phone: '',
    email: '',
    password: '',
    nationality: '',
    newsletter: false,
    acceptPrivacy: false,
    acceptTerms: false,
    captcha: false
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', formData);
    // TODO: Add API call to backend
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl p-8 rounded shadow-lg relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold">&times;</button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Inputs */}
          <div className="flex gap-2">
            <input name="firstName" placeholder="First name" onChange={handleChange} value={formData.firstName} required className="w-1/2 px-4 py-2 border rounded" />
            <input name="lastName" placeholder="Last name" onChange={handleChange} value={formData.lastName} required className="w-1/2 px-4 py-2 border rounded" />
          </div>

          {/* ... Other Inputs ... */}

          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 font-semibold rounded">REGISTER</button>
          <button type="button" onClick={onClose} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 font-semibold rounded">CANCEL</button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  onClose: PropTypes.func.isRequired, // Validate that onClose is a function
};

export default Register;
