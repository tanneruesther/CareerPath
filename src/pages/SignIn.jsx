import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signIn.css'

const SignIn = () => {
  // State to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate after sign-in

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Simulating an API call for sign-in (replace with actual authentication logic)
    if (email === 'user@example.com' && password === 'password123') {
      // Simulate successful login
      alert('Sign In Successful!');
      navigate('/profile');  // Redirect to profile page after successful login
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>

      {/* Show error if validation fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className='input-group'>
          <label></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Sign In</button>
      </form>

      <div className="sign-up-link">
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
