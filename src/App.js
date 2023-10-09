import { Route,Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage/Hompage";
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/Signup/SignUp';
import Error from "./Pages/Error/Error";

function App() {

  const loginstatus = true;


  return (
    <>
    <Routes>
      <Route exact path="/" element={loginstatus ?<Dashboard/>:<Homepage/>}/>
      <Route exact path="/register" element={<SignUp/>}/>
      <Route path="*" element={<Error/>} />

    </Routes>   
    
    </>
  );
}

export default App;
