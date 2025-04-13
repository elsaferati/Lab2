import React from 'react';

const AutoCheckIn = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Auto Check-in</h1>

      <div className="bg-white p-6 rounded shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-purple-700">AUTO CHECK-IN</h2>
            <p className="mt-2">
              Automatically checks you and your travel companions in to your flight 50 hours before your scheduled departure time. Auto Check-in is available for all bookings, depending on your departure airport. Just make sure to add the service for each person and each leg of their journey.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-purple-700">SORTED - YOUR BOARDING CARD(S)</h2>
            <p className="mt-2">
              After the Auto check-in service has checked you in, your boarding card(s) is automatically sent to you (for bookings including up to 10 passengers). If your booking contains more than 10 passengers everyone will be checked in but the boarding cards will not be emailed. Each passenger must retrieve it from wizzair.com.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4">How it Helps</h2>
        <p>
          By adding our Auto Check-in service you can make things easier on yourself in the last couple of days before your flight. You won’t have to worry about checking in during the 24-hour window before departure. The service is performed automatically for you and anyone else in the same booking.
        </p>
      </div>

      <div className="bg-white p-6 rounded shadow mb-8 border border-pink-500">
        <h2 className="text-lg font-bold text-pink-600">Important Information</h2>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>You must add Auto Check-in for each section of your flight and for each individual passenger.</li>
          <li>In certain cases only check-in confirmation is issued, and boarding cards must be obtained at the airport.</li>
          <li>Some airports do not support online check-in, so Auto Check-in is free and performed at the airport only.</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>When am I checked in?</strong> — 50 hours before departure.</li>
          <li><strong>When can I add Auto Check-in?</strong> — Any time up to 4 hours before your flight departs.</li>
          <li><strong>Do I need to buy it for every passenger?</strong> — Yes, it must be added per person and per flight leg.</li>
          <li><strong>Do I have to print my boarding cards?</strong> — Some airports accept digital cards, but check your airport requirements.</li>
          <li><strong>Can I get a refund if I manually check in?</strong> — No refund is available in this case.</li>
        </ul>
      </div>
    </div>
  );
};

export default AutoCheckIn;
