import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function About() {
  return (
    <section>
      <Navbar />
      <div className="about">
        <h1>About SociWave</h1>
        <div className="about-sub">
          <h2>Our Mission</h2>
          <p>
            Our mission at SociWave is simple: to provide accessible and
            effective tools that propel your social media growth. We believe
            that everyone deserves the opportunity to thrive in the digital
            sphere, regardless of their starting point. With our platform, we
            aim to level the playing field, empowering users to build meaningful
            connections, amplify their voices, and achieve their goals.
          </p>
        </div>
        <div className="about-sub">
          <h2>What Sets Us Apart</h2>
          <p>
            What sets SociWave apart is our unwavering commitment to excellence
            and innovation. We're not just another social media marketing
            company; we're your partners in success. From our cutting-edge
            technology to our dedicated support team, we're here to guide you
            every step of the way. Whether you're a seasoned influencer or just
            starting out, SociWave offers the tools and expertise you need to
            succeed.
          </p>
        </div>
        <div className="about-sub">
          <h2>Our Values</h2>
          <p>
            At SociWave, we believe in transparency, integrity, and
            authenticity. We prioritize the needs of our users above all else,
            striving to deliver solutions that exceed expectations. We're
            committed to fostering a community built on trust and mutual
            respect, where everyone has the opportunity to thrive.
          </p>
        </div>
        <div className="about-sub">
          <h2>Get Started Today</h2>
          <p>
            Ready to take your social media presence to new heights? Join the
            SociWave community today and experience the difference for yourself.
            With our intuitive platform and unparalleled support, the
            possibilities are endless. Whether you're looking to grow your
            audience, increase engagement, or drive conversions, SociWave has
            you covered.
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
