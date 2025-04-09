import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      
      {showSignUp && (
        <SignUp onClose={() => setShowSignUp(false)} />
      )}
    </div>

  );
}

export default App;



