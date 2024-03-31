import React, { useState } from "react";
import "./SignUp.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Signup() {

  const navigate = useNavigate();

  const [post, setPost] = useState({
      fname: "",
      lname: "",
      email: "",
      password: "",
      _id: Date.now()
  })
  
  const handleinput=(event)=>{
    setPost({...post,[event.target.name]:event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://sociwave-backend.up.railway.app/addUser", post) 
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

      navigate("/");
  };

  return (
    <>
    <Helmet>
      <title>Sign Up</title>
      <meta
        name="description"
        content="Register to Sociwave and get started with your social media journey."
      />
    </Helmet>
      <div className="form-wrapper">
        <header className="register">
          <h2>Register</h2>
        </header>

        <form onSubmit={(e) => {handleSubmit(e);}}>
          <div className="multi-inputs">
            <div className="form-row">
              <input type="text" name="fname" onChange={handleinput} required />
              <span className="placeholder">First Name</span>
            </div>

            <div className="form-row">
              <input type="text" name="lname" onChange={handleinput} required />
              <span className="placeholder">Last Name</span>
            </div>
          </div>

          <div className="form-row icon-input">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            <input type="email" name="email" onChange={handleinput} required />
            <span className="placeholder">Email</span>
          </div>

          <div className="form-row icon-input">
            <span className="icon">
              <i className="fas fa-key" />
            </span>
            <input type="text" name="password" onChange={handleinput} required />
            <span className="placeholder">Password</span>
          </div>

          <div className="terms-conditions">
            <input id="term" type="checkbox" required/>
            <label htmlFor="terms">
              I agree with the <strong>Terms and Conditions</strong>
            </label>
          </div>

          <div className="form-row">
            <button type="submit">Register</button>
          </div>   

          <div className="signinbox">
            Already a Member ? <Link to="/">Sign In</Link>
          </div>
        </form>
      </div>
    </>
  );
}