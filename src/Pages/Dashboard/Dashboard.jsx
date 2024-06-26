import { React, useEffect, useState } from "react";
import "./Dashboard.css";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  const navigate = useNavigate();

  const [iconsActive, setIconsActive] = useState("tab1");

  const [service, setService] = useState("instaLike");
  const [price, setPrice] = useState(0.0);
  const [link, setLink] = useState("");

  const [balance, setBalance] = useState(0);
  const [spending, setSpending] = useState(0);

  const [totalOrder, setTotalOrder] = useState();

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  // const services = ["instaLike","instaComm","instaFollow","YtLike","YtComm","YtSubs"]

  const packages = [

    //Insta Likes
    {
      name: "Select a Package",
      service: "instaLike",
      value: 0,
    },
    {
      name: "20 Instagram Likes @ ₹20",
      service: "instaLike",
      value: 20,
    },
    {
      name: "50 Instagram Likes @ ₹50",
      service: "instaLike",
      value: 50,
    },
    {
      name: "100 Instagram Likes @ ₹100",
      service: "instaLike",
      value: 100,
    },

    // Insta Comments

    {
      name: "Select a Package",
      service: "instaComm",
      value: 0,
    },
    {
      name: "20 Instagram Comment @ ₹30",
      service: "instaComm",
      value: 30,
    },
    {
      name: "50 Instagram Comment @ ₹75",
      service: "instaComm",
      value: 75,
    },
    {
      name: "100 Instagram Comment @ ₹150",
      service: "instaComm",
      value: 150,
    },

    // Insta Follow

    {
      name: "Select a Package",
      service: "instaFollow",
      value: 0,
    },
    {
      name: "20 Instagram Followers @ ₹40",
      service: "instaFollow",
      value: 40,
    },
    {
      name: "50 Instagram Followers @ ₹100",
      service: "instaFollow",
      value: 100,
    },
    {
      name: "100 Instagram Followers @ ₹200",
      service: "instaFollow",
      value: 200,
    },

    //---- Yt------
    //YouTube Likes
    {
      name: "Select a Package",
      service: "YtLike",
      value: 0,
    },
    {
      name: "20 YouTube Likes @ ₹20",
      service: "YtLike",
      value: 20,
    },
    {
      name: "50 YouTube Likes @ ₹50",
      service: "YtLike",
      value: 50,
    },
    {
      name: "100 YouTube Likes @ ₹100",
      service: "YtLike",
      value: 100,
    },

    // YouTube Comments

    {
      name: "Select a Package",
      service: "YtComm",
      value: 0,
    },
    {
      name: "20 YouTube Comment @ ₹30",
      service: "YtComm",
      value: 30,
    },
    {
      name: "50 YouTube Comment @ ₹75",
      service: "YtComm",
      value: 75,
    },
    {
      name: "100 YouTube Comment @ ₹150",
      service: "YtComm",
      value: 150,
    },

    // YouTube Subscribers

    {
      name: "Select a Package",
      service: "YtSubs",
      value: 0,
    },
    {
      name: "20 YouTube Subscriber @ ₹40",
      service: "YtSubs",
      value: 40,
    },
    {
      name: "50 YouTube Subscriber @ ₹100",
      service: "YtSubs",
      value: 100,
    },
    {
      name: "100 YouTube Subscriber @ ₹200",
      service: "YtSubs",
      value: 200,
    },

    // YouTube VCS Packages
    {
      name: "Select a Package",
      service: "YtVCS",
      value: 0,
    },

    {
      name: "100 Likes + 100 Comments + 100 Subscribers @ ₹500",
      service: "YtVCS",
      value: 500,
    },
    {
      name: "200 Likes + 200 Comments + 200 Subscribers @ ₹1000",
      service: "YtVCS",
      value: 1000,
    },
    {
      name: "1000 Likes + 1000 Comments + 1000 Subscribers @ ₹5000",
      service: "YtVCS",
      value: 5000,
    },
  ];

  const addFund = () => {
    navigate("/addMoney");
  };

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get("https://sociwave-backend.up.railway.app/wallet", { params: { id } })
      .then((res) => {
        setBalance(res.data.balance);
        setSpending(res.data.spending);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://sociwave-backend.up.railway.app/global")
      .then((res) => {
        setTotalOrder(res.data.G.totalOrders);
      })
      .catch((err) => {
        console.log("err in fetching global data");
      });
  }, []);

  const userLink = (e) => {
    setLink(e.target.value);
  };

  const buyService = async (event) => {
    event.preventDefault();
    const billAmnt = price + (price * 18) / 100;

    if (billAmnt > balance) {
      alert("You Wallet Balance is Low");
      return;
    }

    const id = localStorage.getItem("id");

    const trans = {
      id,
      link,
      service,
      price,
      balance: balance - billAmnt,
      spending: spending + billAmnt,
      billAmnt: billAmnt,
      userEmail: localStorage.getItem("email"),
    };

    try{
      await axios
      .post("https://sociwave-backend.up.railway.app/updateWallet", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        trans,
      }) 
      .then((res) => {
        console.log("Data sent");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    }
    catch(err){
      console.error('Error submitting form: ',err);
    }

    window.location.reload();
  };
  const loginStatus = localStorage.getItem("loginStatus");

  return (
    <section>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Sociwave Dashboard. Buy Instagram Likes, Comments, Followers, Youtube Likes, Comments, Subscribers, VCS Packs."
        />
      </Helmet>
      {loginStatus ? (
        <>
          <Navbar />
          <div className="content-area">
            <div className="rowD">
              <div className="box">
                <MDBIcon fas icon="clone" className="icn" />
                <div className="text-part">
                  <h6>TOTAL ORDERS AT SOCIWAVE.IN</h6>
                  <h4>{totalOrder}</h4>
                  <p>3+ months experience providing SMM services!</p>
                </div>
              </div>
              <div className="box">
                <MDBIcon fas icon="wallet" className="icn" />
                <div className="wallet-item">
                  <div className="text-part">
                    <h6>Current Balance</h6>
                    <h4>₹{balance}</h4>
                    <p>
                      Your total spendings : <span>₹{spending}</span>
                    </p>
                  </div>
                  <div className="action-area">
                    <p>looking to Deposit?</p>
                    <button onClick={addFund}>Deposit Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rowD">
              <div className="order-section box">
                <MDBTabs className="mb-3">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleIconsClick("tab1")}
                      active={iconsActive === "tab1"}
                    >
                      <MDBIcon fas icon="clone" className="me-2" /> Service
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleIconsClick("tab2")}
                      active={iconsActive === "tab2"}
                    >
                      <MDBIcon fas icon="th-large" className="me-2" /> Bulk
                      Service
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent style={{ width: "100%" }}>
                  <MDBTabsPane show={iconsActive === "tab1"}>
                    <form onSubmit={buyService}>
                      <b>Services</b>
                      <select id="services" name="services" className="qwety" required value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="instaLike">Instagram Likes</option>
                        <option value="instaComm">Instagram Comments</option>
                        <option value="instaFollow">Instagram Followers</option>
                        <option value="YtLike">Youtube Likes</option>
                        <option value="YtComm">Youtube Comments</option>
                        <option value="YtSubs">Youtube Subscribers</option>
                        <option value="YtVCS">Youtube VCS Pack</option>
                      </select>

                      <b>Package</b>
                      <select id="package" name="package" className="qwety" required onChange={(e) => setPrice(parseFloat(e.target.value + ".00")) }>
                        {packages.map((pack) => {
                          if (pack.service === service) {
                            return (
                              <option value={pack.value}>{pack.name}</option>
                            );
                          }
                          return null;
                        })}
                      </select>

                      <b>Price</b>
                      <label className="qwety">{price}</label>

                      <b>Link</b>
                      <input type="text" placeholder="Account Must be Public" className="qwety" name="link" id="link" onChange={userLink} required/>

                      <b>You Will Pay</b>
                      <label className="qwety">
                        {price + (price * 18) / 100}
                      </label>

                      <input type="checkbox" name="agree" id="agree" required />
                      <span>Yes, i have confirmed the<a href="/terms" target="_blank">Terms & Conditions</a></span>
                      <br />
                      <button type="submit" >Place Order</button>
                      
                    </form>
                  </MDBTabsPane>

                  <MDBTabsPane show={iconsActive === "tab2"}>
                    Very Soon
                  </MDBTabsPane>
                </MDBTabsContent>
              </div>
              <div className="box hmod">
                <h5>Important Instructions</h5>
                <ol>
                  <li>
                    <b>Enter Correct Link</b> : Correct public post link needed
                    for service. Wrong link or private account won't qualify.
                  </li>
                  <li>
                    <b>Payment</b> : You will pay the amount shown in the price
                    section. There is no extra charge.
                  </li>
                  <li>
                    <b>Refund</b> : There is no refund policy. Once you have
                    placed the order, you cannot cancel it.
                  </li>
                  <li>
                    <b>Read Terms & Conditions</b> : You must read the terms and
                    conditions before placing the order.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <h1>"Access Denied"</h1>
      )}
    </section>
  );
}
