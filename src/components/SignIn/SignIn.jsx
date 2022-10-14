import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.scss'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signin">
      <div className="signin__card">
        <div className="signin__card--header">
          <h1>Sign Up</h1>
        </div>
        <div className="signin__card--input">
          <label className="label">Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label className="label">Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="signin__card--footer">
          <button className="signup__btn"><Link to="/signup">Sign Up</Link></button>
          <button className="signin__btn">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn