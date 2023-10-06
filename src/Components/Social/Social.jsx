import { React, useState } from "react";
import "./Social.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Social() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <section id="social">
      <div className="row1">
        <span>
          Here are some <b>Top</b> Performing
        </span>
        <h3>Social Media Marketing Platforms</h3>
      </div>

      <div className="row2">
        <div className="imgcont">
          <img
            src="https://images.irscdn.icu/smm/images/vwaGhhi.png?v=1"
            alt="sf"
          />
        </div>

        <div className="txtAra">
          <MDBTabs className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
              >
                <MDBIcon fab icon="instagram" /> Instagram
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
              >
                <MDBIcon fab icon="youtube" /> YouTube
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleBasicClick("tab3")}
                active={basicActive === "tab3"}
              >
                <MDBIcon fab icon="facebook" /> Facebook
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <hr />

          <MDBTabsContent>
            <MDBTabsPane show={basicActive === "tab1"} >
              <MDBIcon className="xyz" fab icon="instagram" />
              <ul style={{textAlign:"left"}}>
                <li style={{ color: "#3b71ca", fontSize:"1.2em" }}>Buy Instagram Likes</li>
                <li style={{ color: "#3b71ca", fontSize:"1.2em" }}>Buy Instagram Comments</li>
                <li style={{ color: "#3b71ca", fontSize:"1.2em" }}>Buy Instagram Followers</li>
              </ul>  
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "tab2"}>
            <MDBIcon className="xyz" fab icon="youtube" />
              <ul style={{textAlign:"left"}}>
                <li style={{ color: "#3b71ca", fontSize:"1.2em" }}>Buy YouTube Likes</li>
                <li style={{ color: "#3b71ca", fontSize:"1.2em" }}>Buy YouTube Comments</li>
                <li style={{ color: "#3b71ca", fontSize:"1.2em" }}>Buy YouTube Subscribers</li>
              </ul>
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "tab3"}>
            Our service will be available soon, so stay tuned for our upcoming launch!
              
            </MDBTabsPane>
          </MDBTabsContent>
        </div>
      </div>
    </section>
  );
}
