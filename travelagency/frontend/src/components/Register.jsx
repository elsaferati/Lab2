import React, { useState } from "react";
import PropTypes from "prop-types";

const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "female",
    countryCode: "",
    phone: "",
    email: "",
    password: "",
    nationality: "",
    newsletter: false,
    acceptPrivacy: false,
    acceptTerms: false,
    captcha: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // TODO: Add API call -> fetch("/api/register", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl p-8 rounded shadow-lg relative overflow-y-auto max-h-[90vh]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex gap-2">
            <input
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              value={formData.firstName}
              required
              className="w-1/2 px-4 py-2 border rounded"
            />
            <input
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              value={formData.lastName}
              required
              className="w-1/2 px-4 py-2 border rounded"
            />
          </div>

          {/* Date of Birth */}
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />

          {/* Gender */}
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
          </div>

          {/* Phone */}
          <div className="flex gap-2">
            <input
              name="countryCode"
              placeholder="+383"
              onChange={handleChange}
              value={formData.countryCode}
              required
              className="w-1/3 px-4 py-2 border rounded"
            />
            <input
              name="phone"
              placeholder="Mobile Phone number"
              onChange={handleChange}
              value={formData.phone}
              required
              className="w-2/3 px-4 py-2 border rounded"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full px-4 py-2 border rounded"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full px-4 py-2 border rounded"
          />

          {/* Nationality */}
          <input
            name="nationality"
            placeholder="Nationality (Citizenship)"
            onChange={handleChange}
            value={formData.nationality}
            required
            className="w-full px-4 py-2 border rounded"
          />

          {/* Checkboxes */}
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            I agree to receive newsletters and offers.
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              name="acceptPrivacy"
              checked={formData.acceptPrivacy}
              onChange={handleChange}
              required
            />
            I accept the Privacy Notice
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            I have read and agree to the Terms and Conditions
          </label>

          {/* Fake Captcha */}
          <label className="flex gap-2 border p-3 rounded">
            <input
              type="checkbox"
              name="captcha"
              checked={formData.captcha}
              onChange={handleChange}
              required
            />
            I'm not a robot
          </label>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 font-semibold rounded"
          >
            REGISTER
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 font-semibold rounded"
          >
            CANCEL
          </button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Register;
