import React, { useState } from "react";
import "./Payment.css";
import axios from "axios";

export default function Payment() {
  const [upi, setUpi] = useState("");
  const [msg, setMsg] = useState("");

  const name = localStorage.getItem("fname") + " " + localStorage.getItem("lname");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("id");

  const handleUPI = (e) => {
    setUpi(e.target.value);
  };

  const myFunc = () => {
    axios.post("https://sociwave-backend.up.railway.app/order", { upi, name, email, id })
    .then(() => {
      setMsg("Your Order is Placed Successfully and Wallet Balance will be updated soon");
    });
  };

  return (
    <div className="wallet">
      <img src="QR.jpeg" alt="qr" />
      <h4>Plese Enter UPI Transction ID</h4>
      <input
        type="text"
        id="upi"
        name="upi"
        placeholder="Enter UPI Transction ID"
        onChange={handleUPI}
      />
      <button onClick={myFunc}>Submit</button>

      <p>{msg}</p>
    </div>
  );
}
