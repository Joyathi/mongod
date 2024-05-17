import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Components/LandingPage/Navigation'
import Container from './Components/LandingPage/Container'
import SignIn from './Components/LogInPage/LogIn'
import "./Components/LogInPage/LogIn.css"


function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Container />
          <Routes>
            <Route path="/login" exact element={<SignIn />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
