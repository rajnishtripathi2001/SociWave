import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Contact() {
  function submitContact() {
    alert("conatct sub");
  }

  return (
    <div>
      <Navbar />
      <div className="contactPage">
        <div className="contactForm">
          <h1>Contact Us</h1>
          <div className="inputField">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button onClick={submitContact}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
