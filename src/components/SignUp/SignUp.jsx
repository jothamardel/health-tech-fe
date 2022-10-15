import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignUp.scss'
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function httpRegisterUser() {
    if (!password || !email || !fullName || !confirmPassword) return alert("All fields are required!")
    if (password !== confirmPassword) return alert("Password mismatch!");
    setLoading(true);
    const data = {
      email,
      password,
      fullName
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_UNIFY_API_URL}auth/register`, data);
      // console.log(response);
      setMessage(response.data.message)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // console.log(error.response.data);
      setMessage(error.response.data.message);
    }
  }

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if(userDetails) {
      navigate('/dashboard')
    }
  }, []);


  return (
    <>
      <div className="signup">
        <div className="signup__card">
          <div className="signup__card--header">
            <h1>Sign Up</h1>
          </div>
          {message && <h2>{message}</h2>}
          <div className="signup__card--input">
            <label className="label">Full Name:</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
            />
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
            <button disabled={loading} onClick={() => httpRegisterUser()} className="signup__btn">{loading ? "Loading..." : "Sign Up"}</button>
            <button className="signin__btn"><Link to="/signin">Sign In</Link></button>
          </div>
        </div>
      
      </div>
      
    </>
  );
};

export default SignUp;
