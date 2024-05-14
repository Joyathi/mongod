import {BrowserRouter as Router,Route} from "react-router-dom";
import Navigation from "./component/client/landingpage/Navigation";
import Container from "./component/client/landingpage/Container";
import SignIn from "./component/client/Loginpage/Login"
import "./Component/client/Loginpage/Login.css";


function App() {
  

  return (
   <>
   <Router> 
    <Navigation/>
    <Container/>
    <Routes>
      <Route path ="/login" exact element={<SignIn/>}/>
    </Routes>
   </Router>

   </>
  )
}

export default App
