import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.scss'
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  async function httpLoginUser() {
    if (!password || !email ) return alert("All fields are required!")

    setLoading(true);
    const data = {
      email,
      password
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_UNIFY_API_URL}auth/login`, data);
      // console.log(response);
      setMessage(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setLoading(false);
      window.location.reload();
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      // console.log(error.response.data);
      setMessage(error.response.data.message);
    }
  }


  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if(userDetails) {
      navigate('/dashboard');
    }
  }, []);



  return (
    <div className="signin">
      <div className="signin__card">
        <div className="signin__card--header">
          <h1>Sign In</h1>
        </div>
        {message && <h2>{message}</h2>}
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
          <button disabled={loading} onClick={() => httpLoginUser()} className="signin__btn">Sign In</button>
          <button className="signup__btn"><Link to="/signup">Sign Up</Link></button>
        </div>
      </div>
    </div>
  );
}

export default SignIn