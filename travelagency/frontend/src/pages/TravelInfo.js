import React from 'react';

const TravelInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 text-white p-8">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 p-8 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-bold text-center text-indigo-700">Travel Information</h1>

        {/* Preparation */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🧳 Be Prepared</h2>
          <p>
            Travel starts long before you board the plane. From checking documents to packing smart,
            being prepared ensures a stress-free journey.
          </p>
        </section>

        {/* Safety & Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🛡️ Safety & Security</h2>
          <p>
            Your safety is our top priority. Follow airport guidelines, arrive early, and always keep
            your belongings secure.
          </p>
        </section>

        {/* Smart Travel */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">📲 Smart Travel</h2>
          <p>
            Use our app to check in, manage your flight, or track baggage in real-time. Less paper,
            more convenience.
          </p>
        </section>

        {/* Flexibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🔄 Flexible Plans</h2>
          <p>
            Need to change your plans? No worries. Our flexible policies help you reschedule or cancel
            with ease.
          </p>
        </section>

        {/* Health & Wellness */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">💊 Health & Wellness</h2>
          <p>
            Stay hydrated, move often, and bring necessary medications. We also offer health-friendly
            travel options for longer flights.
          </p>
        </section>

        {/* Eco-Conscious Travel */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🌱 Sustainable Travel</h2>
          <p>
            We're committed to greener skies. Choose digital boarding passes, offset your carbon
            footprint, and help us protect the planet.
          </p>
        </section>

        {/* Travel Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🧭 Travel Support</h2>
          <p>
            Need help on the go? Our 24/7 support team and in-app help center are always ready to guide
            you.
          </p>
        </section>

        <div className="text-center mt-10">
          <p className="text-indigo-600 font-semibold">
            With the right info and the right tools, your next journey can be the best one yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelInfo;
