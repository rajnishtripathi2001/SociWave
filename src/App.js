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

function App() {
  const loginstatus = localStorage.getItem("loginStatus");

  return (
    <div>
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
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;