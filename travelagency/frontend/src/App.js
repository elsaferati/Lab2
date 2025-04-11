import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Register from './components/Register';
import HelpCenter from './pages/HelpCenter';
import CheckInBooking from './pages/CheckInBooking';
import Services from './pages/Services'; 
import AirportParking from './pages/AirportParking';
import FastTrack from './pages/FastTrack';
import AirportLounge from './pages/AirportLounge';
import TravelInsurance from './pages/TravelInsurance';
import Priorities from './pages/Priorities';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Header onSignUpClick={() => setShowSignUp(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/check-in-booking" element={<CheckInBooking />} /> 
            <Route path="/services" element={<Services />} /> 
            <Route path="/airport-parking" element={<AirportParking />} /> 
            <Route path="/fast-track" element={<FastTrack />} />
            <Route path="/lounge" element={<AirportLounge />} />
            <Route path="/travel-insurance" element={<TravelInsurance />} />
            <Route path="/priorities" element={<Priorities />} />
          </Routes>
        </main>
        <Footer />
        {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          onRegisterClick={() => {
            setShowSignUp(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Register onClose={() => setShowRegister(false)} />
      )}
      </div>
    </Router>
  );
}

export default App;