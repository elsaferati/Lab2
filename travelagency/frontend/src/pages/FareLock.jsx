import React from 'react';


const FareLock = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Fare Lock</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <img src="/icons/lock-48h.svg" alt="Fare Lock" className="mx-auto mb-2 w-12 h-12" />
          <h2 className="font-semibold text-lg">FARE LOCK</h2>
          <p className="text-sm text-gray-600">Fare Lock gives the opportunity to hold a selected fare for a period of 48 hours.</p>
        </div>
        <div className="text-center">
          <img src="/icons/calendar-7days.svg" alt="7 Days" className="mx-auto mb-2 w-12 h-12" />
          <h2 className="font-semibold text-lg">7 DAYS PRIOR</h2>
          <p className="text-sm text-gray-600">Available for bookings created more than seven days prior to departure date.</p>
        </div>
        <div className="text-center">
          <img src="/icons/no-name.svg" alt="No Names" className="mx-auto mb-2 w-12 h-12" />
          <h2 className="font-semibold text-lg">LOCK FARE WITH NO NAMES</h2>
          <p className="text-sm text-gray-600">You can easily lock a fare without adding any passenger names.</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-6">
        The Fare Lock service is only available for bookings created more than seven days prior to departure date, or date of first flight in case of a return flight.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">The price won’t go up</h2>
        <p className="text-sm text-gray-700">
          Fare Lock gives you the opportunity to hold a selected fare for a period of 48 hours for a <a href="#" className="text-pink-600 underline">fee</a>. The selected flights won’t sell out and the price won’t go up while you make your decision. You can finalise your booking any time within 48 hours by adding passenger names and paying the full amount.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">How it works</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Start your booking and select the routing and the fare class which suits you best</li>
          <li>Select Fare Lock service displayed below the fares section</li>
          <li>Continue your booking without adding any passenger names</li>
          <li>Add payment details and pay the Fare Lock Fee</li>
          <li>Your Flight Summary page will display the date until you can finalise your booking</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">How to access your booking</h2>
        <p className="text-sm text-gray-700">
          You can return to your held booking any time within 48 hours by logging into your profile and opening your Flight Summary page.
        </p>
        <p className="text-sm text-pink-600 font-semibold mt-2">
          If you do not finalise your booking within 48 hours, the booking will be cancelled and the Fare Lock Fee will not be refunded.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-blue-900 mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">How can I lock a fare?</summary>
            <p className="text-sm mt-2">Fare Lock service is available online and gives you the opportunity to hold a selected fare for a period of 48 hours for a <a href="#" className="text-pink-600 underline">fee</a>.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">How can I finalise my booking?</summary>
            <p className="text-sm mt-2">You can finalise your booking online within 48 hours of locking the fare, by adding passenger names and paying the remaining amount.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">How can I pay for the Fare Lock?</summary>
            <p className="text-sm mt-2">You can pay by credit card or using credit from your WIZZ account.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">Is Fare Lock available during promotions?</summary>
            <p className="text-sm mt-2">No, the Fare Lock service cannot be used together with promotional prices or special offers.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">Is Fare Lock refunded if the flight is cancelled?</summary>
            <p className="text-sm mt-2">Yes, the Fare Lock fee is refunded in case your flight is cancelled by Wizz Air.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">What if flight schedule changes while fare is held?</summary>
            <p className="text-sm mt-2">You may accept the change and continue, or request a refund of the Fare Lock fee.</p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">Is Fare Lock available for all flights?</summary>
            <p className="text-sm mt-2">Fare Lock is available for bookings made more than 7 days prior to the departure date.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default FareLock;
