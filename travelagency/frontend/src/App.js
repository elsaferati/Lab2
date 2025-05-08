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
import FareLock from './pages/FareLock';
import TravelInsurancePage from './pages/Bundles';
import Discounts from './pages/Discounts';
import Partner from './pages/Partner';
import ChangeBooking from './pages/faq/ChangeBooking';
import BaggagePolicy from './pages/faq/BaggagePolicy';
import RequestRefund from './pages/faq/RequestRefund';
import Hotels from './pages/Hotels.jsx';
import AboutUs from './pages/AboutUs';
import TravelInfo from './pages/TravelInfo';
import Allyoucanfly from './pages/allyoucanfly'; 
import MembershipRegistration from './pages/MembershipRegistration';
import SittingTogether from './pages/SittingTogether';
import AutoCheckIn from './pages/AutoCheckIn';
import WizzAccount from './pages/WizzAccount';
import TermsAndConditions from './pages/TermsAndConditions';
import LiveChat from "./components/LiveChat"; 
import DiscountClub from './pages/DiscountClub.jsx';
import AllHotels from "./pages/AllHotels.jsx";
import Milanohotels from "./pages/Milanohotels.jsx";
import Budapesthotels from "./pages/Budapesthotels.jsx";
import Parishotels from "./pages/Parishotels.jsx";
import Londonhotels from "./pages/Londonhotels.jsx";

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
            <Route path="/services/fare-lock" element={<FareLock />} />
            <Route path="/bundles" element={<TravelInsurancePage />} />
            <Route path="/services/discounts" element={<Discounts />} />
            <Route path="/services/partners" element={<Partner />} />
            <Route path="/faq/change-booking" element={<ChangeBooking />} />
            <Route path="/faq/baggage-policy" element={<BaggagePolicy />} />
            <Route path="/faq/request-refund" element={<RequestRefund />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/travel-info" element={<TravelInfo />} />
            <Route path="/allyoucanfly" element={<Allyoucanfly />} />     
            <Route path="/membership" element={<MembershipRegistration />} />
            <Route path="/services/sitting-together" element={<SittingTogether />} />
            <Route path="/services/auto-check-in" element={<AutoCheckIn />} />
            <Route path="/services/wizz-account" element={<WizzAccount />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/live-chat" element={<LiveChat />} />
            <Route path="/discount-club" element={<DiscountClub />} />
            <Route path="/all-hotels" element={<AllHotels />} />
            <Route path="/milanohotels" element={<Milanohotels />} />
            <Route path="/budapesthotels" element={<Budapesthotels />} />
            <Route path="/parishotels" element={<Parishotels />} />
            <Route path="/londonhotels" element={<Londonhotels />} />
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
