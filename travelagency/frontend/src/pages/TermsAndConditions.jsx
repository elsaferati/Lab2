import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Terms & Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          Welcome to our platform. By accessing or using our services, you agree to be bound by these Terms and Conditions, all applicable laws, and regulations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Use of Services</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Users must be at least 18 years old or have the supervision of a legal guardian.</li>
          <li>Services are to be used for lawful and personal travel-related purposes only.</li>
          <li>You must provide accurate and complete information during bookings and registrations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Booking & Cancellations</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>All bookings are subject to availability and confirmation.</li>
          <li>Cancellations must follow the rules specified on your booking summary.</li>
          <li>Refunds, if applicable, will be processed within 7–14 business days.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Baggage Policy</h2>
        <p className="text-gray-700">
          Please refer to our <Link to="/faq/baggage-policy" className="text-purple-700 font-semibold">Baggage Policy</Link> page for detailed information on weight, size, and allowances. Any excess will incur additional fees.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Privacy & Security</h2>
        <p className="text-gray-700">
          Your data is securely processed and handled according to our privacy policy. We do not share personal information with third parties without consent, unless required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Payment Terms</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>All transactions are processed in local currency using secure payment gateways.</li>
          <li>Additional bank or currency conversion fees may apply depending on your provider.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Modification of Terms</h2>
        <p className="text-gray-700">
          We reserve the right to modify these terms at any time. Continued use of our services constitutes agreement to the updated terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
        <p className="text-gray-700">
          For any inquiries regarding these terms, please contact our support team via the Help Center.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
