import React, { useState } from 'react';
import './SignUpSignIn.css';

function SignUpSignIn() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
      {/* Sign Up Form */}
      <div className={`form-container sign-up ${isSignUpActive ? 'active' : ''}`}>
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-google"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className={`form-container sign-in ${!isSignUpActive ? 'active' : ''}`}>
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fab fa-google"></i></a>
            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fab fa-github"></i></a>
            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for login</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button className="hidden" id="login" onClick={handleSignInClick}>
              Sign In
            </button>
          </div> 
          <div className="toggle-panel toggle-right">
            <h1>Hello, Patients!</h1>
            <p>Register with your personal details to use all of the site features</p>
            <button className="hidden" id="register" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSignIn;
