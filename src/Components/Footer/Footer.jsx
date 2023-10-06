import React from 'react'
import {MDBIcon} from "mdb-react-ui-kit";

export default function Footer() {
    const footerStyle = {
        color: "white",
        backgroundColor: "gray",
        padding: "15px",
        fontFamily: "Arial",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        flexWrap:"wrap"
      };

    const iconStyle = {
        width:"70px",
        display:"flex",
        justifyContent:"space-around",
        
    }

    const iStyle = {
        backgroundColor:"#3b71ca",
        padding:"20%",
        margin:"5px",
        borderRadius:"50%"
    }

  return (
    <footer id='footer' style={footerStyle} >
        <p style={{fontSize:"1.1em"}}>© sociwave.in All Rights Reserved.</p>
        <div className="footer-icons" style={iconStyle}>
            <MDBIcon fab icon="instagram" style={iStyle} />
            <MDBIcon fas icon="envelope" style={iStyle} />
        </div>
      
    </footer>
  )
}
