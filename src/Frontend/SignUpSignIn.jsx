import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // ✅ import Axios
import './SignUpSignIn.css';

function SignUpSignIn() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('User Info:', decoded);
      alert(`Welcome ${decoded.name}!`);
      navigate('/services');
    } catch (err) {
      console.error('JWT Decode failed', err);
    }
  };

  const handleGoogleFailure = () => {
    console.log('Google Sign-In Failed');
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/user/signup', signupData);
      alert(res.data.message);
      navigate('/services'); // or wherever you want
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  const handleLoginSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/user/login', loginData);
      alert(res.data.message);
      localStorage.setItem('token', res.data.token); // store token if needed
      navigate('/services');
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <GoogleOAuthProvider clientId="491262978062-v3h87p7sdc8gm6gpslq7f8bn3djhukv1.apps.googleusercontent.com">
      <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
        {/* Sign Up Form */}
        <div className={`form-container sign-up ${isSignUpActive ? 'active' : ''}`}>
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={signupData.username}
              onChange={handleSignupChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <button type="button" onClick={handleSignupSubmit}>Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`form-container sign-in ${!isSignUpActive ? 'active' : ''}`}>
          <form>
            <h1>Log In</h1>
            <div className="social-icons">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
            </div>
            <span>or use your email for login</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <a href="#">Forget Your Password?</a>
            <button type="button" onClick={handleLoginSubmit}>Log In</button>
          </form>
        </div>

        {/* Toggle Panels */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site features</p>
              <button className="hidden" id="login" onClick={handleSignInClick}>
                Log In
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
    </GoogleOAuthProvider>
  );
}

export default SignUpSignIn;
