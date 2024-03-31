import {React,useState} from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Contact() {

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("https://sociwave-backend.up.railway.app/contact", contactData)
    .then((res) => {
      alert("Message Sent Successfully!");
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact us for any queries, feedback, or just to say hello."
        />
      </Helmet>
      <Navbar />
      <div className="contactPage">
        <div className="inner-contactPage contactPage-upper"></div>
        <div className="inner-contactPage contactPage-lower">
          <div className="form-container">
            <div className="form-container-info">
              <h5>Contact Information</h5>
              <p>
                Questions, feedback, or just saying hello? Contact us anytime!
              </p>
              <div className="contact-info-div">
                <MDBIcon fas icon="envelope" />
                <span>Nbx@gmail.com</span>
              </div>
              <div className="contact-info-div">
                <MDBIcon fas icon="map-marker-alt" size='lg' />
                <span>New Delhi, India</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} method="POST" className="form-container-form">
              <div className="form-name-email">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" name="email" onChange={handleChange} required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Write here your message" cols="30" rows="5" onChange={handleChange} required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
