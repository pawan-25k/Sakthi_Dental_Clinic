import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-lavender-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;