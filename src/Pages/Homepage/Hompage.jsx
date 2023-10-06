import React from "react";
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

function Homepage() {
  return (
    <>
      <Navbar />
      <h2 style={{marginTop:"120px", textAlign:"center"}}>Unlock Your Social Media Influence <br />with SociWave</h2>
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
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
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
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg">
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
              <MDBBtn style={{ backgroundColor: "#3b5998" }} href="#">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn style={{ backgroundColor: "#dd4b39" }} href="#">
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn style={{ backgroundColor: "#333333" }} href="#">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>

            <h6>
              <p style={{ marginTop: "50px", textAlign: "center" }}>
                Do not have an account? <a href="#qw">Sign Up</a>
              </p>
            </h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Hero />
      <Social />
      <LastRem/>
      <Footer/>      
    </>
  );
}

export default Homepage;
