import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSignIn from './Frontend/SignUpSignIn';
import Home from './Frontend/Home';
import Services from './Frontend/Services';
import About from './About';
import Contact from './Frontend/Contact';
import Dashboard from './Frontend/pages/Dashboard';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignUpSignIn />} />
          <Route path="/signup" element={<SignUpSignIn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
       
        
      </div>
    </Router>
  );
}

export default App;
