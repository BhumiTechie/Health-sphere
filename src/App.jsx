import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSignIn from './Frontend/SignUpSignIn';
import Home from './Frontend/Home';
import Services from './Frontend/Services';
import About from './About';
import Contact from './Frontend/contact';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Sign Up / Sign In Route */}
        <Route path="/signin" element={<SignUpSignIn />} />
        <Route path="/signup" element={<SignUpSignIn />} />

        {/* Services Page with Sidebar */}
        <Route path="/services" element={<Services />} />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />
        
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
