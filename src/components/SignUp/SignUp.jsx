import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.scss'
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signup">
      <div className="signup__card">
        <div className="signup__card--header">
          <h1>Sign Up</h1>
        </div>
        <div className="signup__card--input">
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
          <label className="label">Confirm Password:</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="signup__card--footer">
          <button className="signin__btn"><Link to="/signin">Sign In</Link></button>
          <button className="signup__btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
