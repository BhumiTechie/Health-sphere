import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpSignIn from './Frontend/SignUpSignIn';
import Home from './Frontend/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Sign Up / Sign In Route */}
        <Route path="/signin" element={<SignUpSignIn />} />
        <Route path="/signup" element={<SignUpSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
