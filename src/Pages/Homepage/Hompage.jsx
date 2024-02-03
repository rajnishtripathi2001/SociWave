import { React, useState } from "react";
import "./Homepage.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Social from "../../Components/Social/Social";
import LastRem from "../../Components/LastRem/LastRem";
import Footer from "../../Components/Footer/Footer";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    await axios
      .post("https://sociwave-backend.up.railway.app/getUser", user)
      .then((res) => {
        if (res.data.status === "success") {
          localStorage.setItem("fname", res.data.user.fname);
          localStorage.setItem("lname", res.data.user.lname);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("id", res.data.user.id);
          localStorage.setItem("loginStatus", "true");
          navigate("/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="1st">
      <Navbar />
      <h2 style={{ marginTop: "120px", textAlign: "center" }}>
        Unlock Your Social Media Influence <br />
        with SociWave
      </h2>
      <MDBContainer fluid className="p-3 mar">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phoneimg"
            />
          </MDBCol>

          <MDBCol col="4" md="4">
            <MDBInput
              wrapperClass="mb-4"
              onChange={handleChange}
              name="email"
              label="Email address"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="/resetPassword">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg" onClick={login}>
              Sign in
            </MDBBtn>

            <div className="divider d-flex align-items-center my-4">
              <p
                className="text-center fw-bold mx-3 mb-0"
                style={{ width: "100%" }}
              >
                OR
              </p>
            </div>

            <div className="socio-cont">
              <MDBBtn
                style={{ backgroundColor: "#3b5998" }}
                href="#"
                onClick={openModal}
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn style={{ backgroundColor: "#dd4b39" }} href="#" onClick={openModal}>
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn style={{ backgroundColor: "#333333" }} href="#" onClick={openModal}>
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>

            {isModalOpen ? (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>
                    Feature unavailable 
                  </h2>
                  <p>This service is temporarily unavailable..</p>
                </div>
              </div>
            ) : null }

            <h6>
              <p style={{ marginTop: "50px", textAlign: "center" }}>
                Do not have an account? <a href="/register">Sign Up</a>
              </p>
            </h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Hero />
      <Social />
      <LastRem />
      <Footer />
    </div>
  );
}

export default Homepage;
