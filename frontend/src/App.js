import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages...

// User-side
import "./App.css";
import "./Theme/Theme.scss"
import LandingPage from "./pages/user/LandingPage";
import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";

// Admin-side
import Home from "./pages/admin/Home/Home";
import ListUser from "./pages/admin/ListUser/ListUser";
import LoginAdmin from "./pages/admin/LoginAdmin/LoginAdmin";
import NewUser from "./pages/admin/newUser/NewUser";
import SingleUser from "./pages/admin/singleUser/SingleUser";
import TrainerLogin from "./pages/trainer/trainerLogin/TrainerLogin";

// Trainer-side


function App() {
  return (
    <>
      <div className=" main-container container-fluid">
        <Router>
          <Routes>
            {/* user-side */}
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>



            {/* Admin-Side */}
            <Route path="/admin">
              <Route index element={<LoginAdmin />}/>
              <Route path="dashboard" element={<Home/>}/>
              {/* user-in-admin */}
              <Route path="users">
                <Route index element={<ListUser/>}/>
                <Route path=":userId" element={<SingleUser />} />
                <Route path="new" element={<NewUser/>}/>
              </Route>
              {/* Trainer-in-admin */}
              <Route path="trainers">
                <Route index element={<ListUser />} />
                <Route path=":trainerId" element={<SingleUser />} />
                <Route path="new" element={<NewUser />} />
              </Route>
            </Route>
            

            {/* Trainer-side */}
            <Route path="/trainer">
              <Route index element={<TrainerLogin/>}/>

            </Route>
          
          </Routes>
        </Router>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
