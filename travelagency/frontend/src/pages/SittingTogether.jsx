import React from 'react';

const SittingTogether = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Sitting Together</h1>

      <section className="mb-6">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Available only for bookings with 2 adults</strong></li>
          <li>Can be purchased only when making a <strong>reservation with Basic fare</strong></li>
          <li><strong>Can be purchased during and after the booking</strong></li>
          <li>In case of a <strong>return flight</strong>, Sitting together product has to be purchased for both legs</li>
          <li>It is <strong>not possible to select the specific seats</strong> you want but you will be seated next to each other</li>
          <li>Seats are <strong>allocated after the reservation is completed</strong></li>
          <li>The allocated seats are <strong>non-premium</strong> (extra legroom, front row, and upfront seats are excluded)</li>
          <li>Online check-in for flights is available <strong>30 days prior</strong> to scheduled departure</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Terms and Conditions</h2>
        <p className="text-sm mb-2">
          By purchasing Sitting together <strong>You</strong> acknowledge and agree, that the present Terms and Conditions apply to <strong>You</strong> and to the <strong>Passenger</strong> in your Reservation/booking.
        </p>

        <div className="space-y-2 text-sm">
          <p><strong>1. INTERPRETATION</strong></p>
          <p>1.1 Terms and expressions defined in the General Conditions of Carriage of Wizz Air apply here.</p>
          <p>1.2 Definitions include services of Wizz Air Hungary Ltd and/or Wizz Air UK Ltd depending on flight.</p>
          <p>1.3 <strong>YOU or RESERVER</strong>: person making the booking for themselves or on behalf of others.</p>
          <p>1.4 <strong>Sitting together</strong>: means Our service provided based on these terms, seating passengers next to each other.</p>

          <p><strong>2. SITTING TOGETHER PRODUCT</strong></p>
          <p>2.1 Available via <a href="https://wizzair.com" className="text-pink-600 underline">Website</a> or Wizz Air mobile app during and after reservation.</p>

          <ul className="list-disc list-inside space-y-1">
            <li>Only for reservations including 2 adult passengers</li>
            <li>Must be purchased with Basic fare</li>
            <li>Can be purchased during and after booking</li>
            <li>Subject to a per-flight fee</li>
            <li>Required for both flights if return</li>
            <li>No option to select specific seats – allocation happens after reservation</li>
            <li>Seats are non-premium (excludes front row, legroom, upfront)</li>
            <li>Online check-in available 30 days before departure</li>
          </ul>

          <p>2.8 If <strong>You</strong> change your reservation:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>If flight changes, Sitting together can be reused but not guaranteed to sit together</li>
            <li>If not used, fee is not refunded</li>
            <li>If passenger type changes (e.g., to child), fee is not refunded</li>
          </ul>

          <p>2.9 Product is subject to availability</p>
          <p>2.10 Only for reservations made via <a href="https://wizzair.com" className="text-pink-600 underline">wizzair.com</a> or mobile app</p>
          <p>2.11 Not available for agency bookings</p>

          <p><strong>2.12 Jurisdiction</strong>: Governed by Hungarian law. Disputes resolved in Hungarian courts (non-exclusive jurisdiction).</p>
        </div>
      </section>
    </div>
  );
};

export default SittingTogether;