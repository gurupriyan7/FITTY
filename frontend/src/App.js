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
import TrainerClientScreen from './components/trainer/TrainerClientsScreen/TrainerClientScreen'
import UserHomeScreen from './components/User/userHomeScreen/UserHomeScreen'
import GetACoachScreen from './components/User/GetACoachScreen/GetACoachScreen'
import GetPlansScreen from './components/User/GetplansScreen/GetPlansScreen'
import MyPlansScreen from './components/User/MyPlansScreen/MyPlansScreen'
import UserProfileScreen from './components/User/UserProfile/UserProfileScreen'

// Admin-side
import Home from './pages/admin/Home/Home'
import ListUser from './pages/admin/ListUser/ListUser'
import LoginAdmin from './pages/admin/LoginAdmin/LoginAdmin'
import NewUser from './pages/admin/newUser/NewUser'
import AddTrainer from './pages/admin/addTrainer/AddTrainer'
import ListTrainer from './pages/admin/ListTrainer/ListTrainer'

// Trainer-side
import TrainerLogin from './pages/trainer/trainerLogin/TrainerLogin'
import TrainerHome from './pages/trainer/trainerHome/TrainerHome'
import TrainerHomeScreen from './components/trainer/trainerHomeScreen/TrainerHomeScreen'
import { useSelector } from 'react-redux'
import TrainerPlansScreen from './components/trainer/TrainerPlansScreen/TrainerPlansScreen'
import AddPostScreen from './components/User/AddPostScreen/AddPostScreen'
import TrainerAddPostScreen from './components/trainer/TrainerAddPostScreen/TrainerAddPostScreen'

function App() {
  const { trainer } = useSelector((state) => state.trainerAuth)
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <div className=" main-container container-fluid">
        <Router>
          <Routes>
            {/* User-side */}
            <Route path="/">
              <Route index element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="home" element={user ? <UserHome /> : <LoginPage />}>
                <Route index element={<UserHomeScreen />} />
                <Route path="getacoach" element={<GetACoachScreen />} />
                <Route path="getplans" element={<GetPlansScreen />} />
                <Route path="myplans" element={<MyPlansScreen />} />
                <Route path="profile" element={<UserProfileScreen />} />
                <Route path='addpost' element={<AddPostScreen/>}/>
              </Route>
            </Route>
            {/* user-side */}

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
                <Route index element={<ListTrainer />} />
                <Route path="new" element={<AddTrainer />} />
              </Route>
            </Route>

            {/* Trainer-side */}
            <Route path="/trainer">
              <Route index element={<TrainerLogin/>} />
              <Route path="home" element={trainer ?<TrainerHome /> : <TrainerLogin/>}>
                <Route index element={<TrainerHomeScreen />} />
                <Route path="clients" element={<TrainerClientScreen />} />
                <Route path='tplans'element={<TrainerPlansScreen/>}/>
                <Route path='taddpost' element={<TrainerAddPostScreen/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
