import React, { useState } from 'react';

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
          <div className="flex gap-2">
            <input name="firstName" placeholder="First name" onChange={handleChange} value={formData.firstName} required className="w-1/2 px-4 py-2 border rounded" />
            <input name="lastName" placeholder="Last name" onChange={handleChange} value={formData.lastName} required className="w-1/2 px-4 py-2 border rounded" />
          </div>

          <input type="date" name="dob" onChange={handleChange} value={formData.dob} required className="w-full px-4 py-2 border rounded" />

          <div className="flex gap-2">
            <button type="button" className={`w-1/2 py-2 border rounded ${formData.gender === 'female' ? 'bg-blue-800 text-white' : ''}`} onClick={() => setFormData({ ...formData, gender: 'female' })}>Female</button>
            <button type="button" className={`w-1/2 py-2 border rounded ${formData.gender === 'male' ? 'bg-blue-800 text-white' : ''}`} onClick={() => setFormData({ ...formData, gender: 'male' })}>Male</button>
          </div>

          <input name="countryCode" placeholder="Country code" onChange={handleChange} value={formData.countryCode} className="w-full px-4 py-2 border rounded" />

          <input name="phone" placeholder="Mobile Phone number" onChange={handleChange} value={formData.phone} required className="w-full px-4 py-2 border rounded" />

          <input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={formData.email} required className="w-full px-4 py-2 border rounded" />

          <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required className="w-full px-4 py-2 border rounded" />

          <input name="nationality" placeholder="Nationality (Citizenship)" onChange={handleChange} value={formData.nationality} required className="w-full px-4 py-2 border rounded" />

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="mt-1" />
            I agree to receive newsletters, personalized marketing, and discounted offers according to the <a href="#" className="text-blue-600 underline">Privacy Notice</a>.
          </label>

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} className="mt-1" />
            I accept the <a href="#" className="text-blue-600 underline">Privacy Notice</a>.
          </label>

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="mt-1" />
            I have read and agree to the <a href="#" className="text-blue-600 underline">WIZZ Account Terms and Conditions</a>.
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="captcha" checked={formData.captcha} onChange={handleChange} className="mt-1" />
            I'm not a robot (simulated)
          </label>

          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 font-semibold rounded">REGISTER</button>
          <button type="button" onClick={onClose} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 font-semibold rounded">CANCEL</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
