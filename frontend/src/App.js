import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// pages...

// User-side
import './App.css'
import './Theme/Theme.scss'
// import LandingPage from './pages/user/userLandingPage/LandingPage'
import LoginPage from './pages/user/userLogin/LoginPage'
import RegisterPage from './pages/user/userRegister/RegisterPage'
import UserHome from './pages/user/userHome/UserHome'

// Admin-side
import Home from './pages/admin/Home/Home'
import ListUser from './pages/admin/ListUser/ListUser'
import LoginAdmin from './pages/admin/LoginAdmin/LoginAdmin'
import NewUser from './pages/admin/newUser/NewUser'
import TrainerLogin from './pages/trainer/trainerLogin/TrainerLogin'
import TrainerHome from './pages/trainer/trainerHome/TrainerHome'
import AddTrainer from './pages/admin/addTrainer/AddTrainer'
import ListTrainer from './pages/admin/ListTrainer/ListTrainer'
import SinglePost from './pages/trainer/singlePost/SinglePost'

// Trainer-side

function App() {
  return (
    <>
      <div className=" main-container container-fluid">
        <Router>
          <Routes>
            {/* user-side */}
            <Route path="/" element={<UserHome/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/home'element={<UserHome/>}/>

            {/* Admin-Side */}
            <Route path="/admin">
              <Route index element={<LoginAdmin />} />
              <Route path="dashboard" element={<Home />} />
              {/* user-in-admin */}
              <Route path="users">
                <Route index element={<ListUser />} />
                <Route path="new" element={<NewUser />} />
              </Route>
              {/* Trainer-in-admin */}
              <Route path="trainers">
                <Route index element={<ListTrainer/>} />
                <Route path="new" element={<AddTrainer />} />
              </Route>
            </Route>

            {/* Trainer-side */}
            <Route path="/trainer">
              <Route index element={<TrainerHome />} />
              <Route path="login" element={<TrainerLogin />} />
              <Route path="singlepost" element={<SinglePost/>} />
            </Route>
          </Routes>
        </Router>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
