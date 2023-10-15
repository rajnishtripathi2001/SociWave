import { Route,Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage/Hompage";
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/Signup/SignUp';
import Error from "./Pages/Error/Error";
import Payment from "./Pages/Payment/Payment";

function App() {

  const loginstatus = localStorage.getItem("loginStatus");
  console.log(loginstatus);
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={loginstatus ? <Dashboard/>:<Homepage/>}/>
      <Route exact path="/dashboard" element={<Dashboard/> } />
      <Route exact path="/register" element={<SignUp/>}/>
      <Route exact path="/addMoney" element={<Payment/>}/>
      <Route path="*" element={<Error/>} />

    </Routes>   
    
    </>
  );
}

export default App;
