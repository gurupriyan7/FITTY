import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import Header from "./components/Header";
import LandingPage from "./pages/user/LandingPage";

import '../stylesheets/Headder.css'

function App() {
  return (
    <>
    <Router>
    
      <Header/>
   
      
    <div className="container py-5">
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
  
   </div>
   </Router>
   </>
  )
}

export default App;
