import React, { useState } from 'react';

const SignUp = ({onClose}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    marketingConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // TODO: Send data to backend API
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-8 rounded shadow-lg relative">
      <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1"
            />
            I agree to receive newsletters, personalized marketing, and discounted offers according to the <a href="#" className="text-blue-500 underline">Privacy Notice</a>.
          </label>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700"
          >
            SIGN UP
          </button>

          <button
          type="button"
          onClick={onClose}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700"
        >
          CANCEL
        </button>

          <p className="text-xs text-gray-500 mt-4">
            This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
          </p>

          <div className="flex justify-between text-sm mt-4">
            <a href="#" className="text-pink-600 underline">REGISTRATION</a>
            <a href="#" className="text-pink-600 underline">AGENCY LOGIN</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
