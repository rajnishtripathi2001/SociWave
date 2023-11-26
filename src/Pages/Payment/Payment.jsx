import React, { useState } from "react";
import "./Payment.css";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";

export default function Payment() {
  const [amount, setAmount] = useState(0);

  const handleInput = (e) => {
    setAmount(e.target.value);
  };

  const userID = localStorage.getItem("id");

  const addMoney = async (e) => {

    if (amount < 100 || amount > 2000) {
      alert("Please enter amount between ₹100 and ₹2000");
      return;
    }

    const {
      data: { key },
    } = await axios.get("https://sociwave-backend.up.railway.app/getkey"); //"http://localhost:5000/getkey"
    const { data } = await axios.post("https://sociwave-backend.up.railway.app/order", { // "http://localhost:5000/order"
      amount,
      userID,
    });

    const options = {
      key: key,
      amount: data.amount,
      currency: "INR",
      name: "SociWave",
      description: "Social Media Marketing Service",
      image: "https://static.tnn.in/photo/96295917/96295917.jpg",
      order_id: data.id,
      callback_url: "https://sociwave-backend.up.railway.app/PaymentVerification", // "http://localhost:5000/PaymentVerification"
      prefill: {
        name: localStorage.getItem("fname"),
        email: localStorage.getItem("email"),
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    e.preventDefault();
  };

  return (
    <div className="wallet">
      <MDBIcon fas icon="wallet" className="wallet-icon" />
      <div className="wallet-form">
        <h4>Add Money To Your wallet</h4>
        <label>Amount(₹)</label>
        <input
          type="number"
          placeholder="min:₹100 and max:₹2000"
          onChange={handleInput}
          
        />
        <button onClick={addMoney}>Add Money </button>
      </div>
    </div>
  );
}
