import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Hompage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUp from "./Pages/Signup/SignUp";
import Error from "./Pages/Error/Error";
import Payment from "./Pages/Payment/Payment";
import Terms from "./Pages/Terms/Terms";
import FAQ from "./Pages/FAQ/FAQ";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blogs from "./Pages/Blogs/Blogs";
import ForgotPasswd from "./Pages/ForgotPasswd/ForgotPasswd";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const loginstatus = localStorage.getItem("loginStatus");

  const [maintenance, setMaintenance] = useState({
    state: false,
    msg: "",
  });

  useEffect(() => {
    axios
      .get("https://sociwave-backend.up.railway.app/global")
      .then((res) => {
        console.log(res.data.G);
        if (res.data.G.maintinanceMode === "Active") {
          setMaintenance({
            state: false,
            msg: res.data.G.maintinanceMessage,
          });
        } else {
          setMaintenance({
            state: true,
            msg: res.data.G.maintinanceMessage,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {maintenance.state ? (
        <div className="maintenanceBox">
          <h2>Under Maintenance</h2>
          <img
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/94/road-closure.png"
            alt="road-closure"
          />
          <p>{maintenance.msg}</p>
        </div>
      ) : (
        <Routes>
          <Route exact path="/" element={loginstatus ? <Dashboard /> : <Homepage />}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/addMoney" element={<Payment />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/resetPassword" element={<ForgotPasswd />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
}

export default App;
