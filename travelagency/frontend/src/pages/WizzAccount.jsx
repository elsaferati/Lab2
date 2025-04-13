import React from 'react';

const WizzAccount = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">WIZZ Account</h1>

        <p className="mb-6">
          By registering at wizzair.com, your WIZZ Account will be automatically opened for you with a 10 digit WIZZ
          Account number (starting with 0 balance).
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Manage your bookings</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>View current bookings</li>
            <li>Track payments</li>
            <li>Update personal information</li>
          </ul>
          <p className="mt-2">
            Use your WIZZ Account balance to book and pay for tickets. Partial payment is also possible, if your balance
            does not cover the total costs, you can pay the difference by credit card.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Top up your WIZZ Account balance with credit card points</h2>
          <p>You can top up your balance converting points earned on WIZZ co-branded credit cards, such as:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Erste Bank in Hungary</li>
            <li>DSK Bank in Bulgaria</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            Please note that points converted from WIZZ co-branded credit cards may be subject to expiry dates, in
            accordance with your agreement with the card issuer.
          </p>
          <p className="mt-2">
            Read <a href="#" className="text-pink-600 underline">Terms and Conditions of the WIZZ Account</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Frequently Asked Questions</h2>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <h3 className="font-semibold">I can't log in, what should I do?</h3>
            <p>
              It’s possible that multiple registrations belong to one e-mail address, which in these cases block each
              other’s access. Please contact the <a href="#" className="text-pink-600 underline">Wizz Air Call Centre</a>
              , and our colleagues will merge multiple accounts into one.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded mb-4">
            <h3 className="font-semibold">I can't find my booking. Why is that?</h3>
            <p>
              It’s possible that you were logged in and booked your flights using a different profile. Please contact the
              <a href="#" className="text-pink-600 underline"> Wizz Air Call Centre</a>!
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold">I made a mistake during the registration process. What should I do?</h3>
            <p>
              You can correct mistakes simply by re-typing relevant personal details on your profile. To do that, just
              sign in and click on My profile. All fields can be edited, except for the name, the title and the e-mail
              address. After editing, click on Save to finalize corrections. You can also contact the
              <a href="#" className="text-pink-600 underline"> Wizz Air Call Centre</a> for assistance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WizzAccount;