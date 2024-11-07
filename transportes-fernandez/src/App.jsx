import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Screens (Pages)
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Services from './screens/Services';

// Import CSS
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header is usually the same across pages */}
        <Header />

        {/* Main content - use Routes to manage pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Footer is also usually the same across pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
