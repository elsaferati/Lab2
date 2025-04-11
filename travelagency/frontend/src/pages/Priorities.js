import React from 'react';

const Priorities = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Priorities</h1>
      <p className="mb-6">
        Protect your journey with our comprehensive travel priority services.
        From peace of mind to hassle-free assistance, we're here for you every
        step of the way.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl shadow bg-white border">
          <h2 className="text-xl font-semibold mb-2">Trip Cancellation Protection</h2>
          <p>Get reimbursed if you need to cancel your trip due to unexpected events.</p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white border">
          <h2 className="text-xl font-semibold mb-2">Medical Coverage Abroad</h2>
          <p>Stay covered with medical assistance and emergency care while traveling.</p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white border">
          <h2 className="text-xl font-semibold mb-2">Lost Baggage Assistance</h2>
          <p>Receive compensation and help locating your lost or delayed luggage.</p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white border">
          <h2 className="text-xl font-semibold mb-2">24/7 Support Line</h2>
          <p>Our support team is always a call away for any travel emergencies.</p>
        </div>
      </div>
    </div>
  );
};

export default Priorities;
