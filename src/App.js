import Homepage from "./Pages/Homepage/Hompage";
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {

  const loginstatus = false;


  return (
    <>
    {loginstatus ?<Dashboard/>  :  <Homepage/>}
    
    
    </>
  );
}

export default App;
