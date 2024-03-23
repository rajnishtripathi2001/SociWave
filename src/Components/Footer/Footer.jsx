import {React} from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import './Footer.css'

export default function Footer() {


  return (
    <div className="footer" >
      <p>© sociwave.in All Rights Reserved.</p>
      <div className="footer-iconStyle" >
        <MDBIcon fab icon="instagram" className="footer-iStyle" />
        <MDBIcon fas icon="envelope" className="footer-iStyle" />
      </div>
    </div>
  );
}
