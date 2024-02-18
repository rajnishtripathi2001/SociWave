import React from "react";
import "./Blogs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Blogs() {
  return (
    <section>
      <Navbar />

      <div className="blogpage">
        <div className="message-show">
          <h3>Coming Soon: Blogs Await!</h3>
          <p>Exciting blogs are on their way! Stay tuned
          for valuable insights and tips to boost your social media presence.
          Thank you for your patience!</p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
