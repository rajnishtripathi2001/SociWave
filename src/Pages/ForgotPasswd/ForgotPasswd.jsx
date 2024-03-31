import { React, useState } from "react";
import "./ForgotPasswd.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function ForgotPasswd() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tempOTP, setTempOTP] = useState();
  const [otp, setOtp] = useState();
  const [stage, setStage] = useState(true);
  const [finalStage, setFinalStage] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  function maskEmail(email) {
    const [localPart, domainPart] = email.split("@");
    const localPartLength = localPart.length;
    const charactersToShow = Math.min(3, localPartLength);
    const maskedLocalPart =
      localPart.slice(0, charactersToShow) +
      "*".repeat(localPartLength - charactersToShow);
    const maskedEmail = maskedLocalPart + "@" + domainPart;
    return maskedEmail;
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // genrate OTP at BAckend and store in tempOTP
    axios
      .post("https://sociwave-backend.up.railway.app/generateOTP", { email })
      .then((res) => {
        if (res.data.status === "success") {
          setTempOTP(res.data.otp);
          const maskedEmail = maskEmail(email);
          setMessage(`OTP for Password reset has been sent to ${maskedEmail}`);
          setStage(false);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitOTP = (e) => {
    e.preventDefault();
    if (otp === tempOTP) {
      setMessage("");
      setFinalStage(true);
      setTempOTP("");
    } else {
      alert("Wrong OTP : Please enter the correct OTP");
    }
  };

  const changePassword = (e) => {
    e.preventDefault();
    // Here you can add your logic for changing the password
    if (newPassword !== confirmNewPassword) {
      setMessage("New password and confirm password do not match.");
    } else {
      let password = newPassword;
      axios
        .post("https://sociwave-backend.up.railway.app/resetPassword", {email, password })
        .then((res) => {
          if (res.data.status === "success") {
            setMessage("Password has been changed successfully.");
            setNewPassword("");
            setConfirmNewPassword("");
            setTimeout(() => {
              Navigate("/");
            }, 5000);
          }
        })
        .catch((err) => {
          console.log(err);
        }); 
    }
  };

  return (
    <section>
      <Helmet>
        <title>Forgot Password</title>
        <meta
          name="description"
          content="Forgot your password? Reset it here."
        />
      </Helmet>
      <Navbar />
      <div className="forgot-password">
        {finalStage ? (
          <>
            <h2>Change Password</h2>
            <form onSubmit={changePassword}>
              <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                required
              />
              <label htmlFor="confirmNewPassword">Confirm New Password:</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
                }}
                required
              />
              <button type="submit">Change Password</button>
            </form>
            {message && <p>{message}</p>}
          </>
        ) : (
          <>
            {stage ? (
              <>
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Enter your email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Reset Password</button>
                </form>
              </>
            ) : (
              <>
                {message && <p>{message}</p>}
                <form onSubmit={submitOTP}>
                  <label htmlFor="otp">Enter the OTP:</label>
                  <input
                    type="number"
                    id="otp"
                    value={otp}
                    onChange={(event) => {
                      setOtp(event.target.value);
                    }}
                    required
                  />
                  <button type="submit">Submit OTP</button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
