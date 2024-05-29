import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from './Components/Adduserpage/Adduser'
import Navigation from './Components/LandingPage/Navigation'
import Container from './Components/LandingPage/Container'
import SignIn from './Components/LogInPage/LogIn'
import "./Components/LogInPage/LogIn.css"


function App() {
  return (
    <>
      <Router>
        <Adduser/>
        <Navigation />
        <Container />
        
          <Routes>
            <Route path="/adduser" exact element={<Adduser/>} />
          </Routes>

          <Routes>
            <Route path="/login" exact element={<SignIn/>}/>
          </Routes>

      </Router>
    </>
  )
}

export default App;
