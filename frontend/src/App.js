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
import UserTrainerProfileScreen from './components/User/TrainerProfile/UserTrainerProfileScreen'
import UserPaymentScreen from './components/User/UserPayment/UserPaymentScreen'


// Admin-side
import Home from './pages/admin/Home/Home'
import ListUser from './pages/admin/ListUser/ListUser'
import LoginAdmin from './pages/admin/LoginAdmin/LoginAdmin'
import NewUser from './pages/admin/newUser/NewUser'
import AddTrainer from './pages/admin/addTrainer/AddTrainer'
import ListTrainer from './pages/admin/ListTrainer/ListTrainer'
import AdminLayout from './pages/admin/adminLayout/AdminLayout'

// Trainer-side
import TrainerLogin from './pages/trainer/trainerLogin/TrainerLogin'
import TrainerHome from './pages/trainer/trainerHome/TrainerHome'
import TrainerHomeScreen from './components/trainer/trainerHomeScreen/TrainerHomeScreen'
import { useSelector } from 'react-redux'
import TrainerPlansScreen from './components/trainer/TrainerPlansScreen/TrainerPlansScreen'
import AddPostScreen from './components/User/AddPostScreen/AddPostScreen'
import TrainerAddPostScreen from './components/trainer/TrainerAddPostScreen/TrainerAddPostScreen'
import TrainerProfileScreen from './components/trainer/TrainerProfileScreen/TrainerProfileScreen'
import AddPlanScreen from './components/trainer/AddPlanScreen/AddPlanScreen'
import TrainerSinglePlanScreen from './components/trainer/TrainerSinglePlanScreen/TrainerSinglePlanScreen'
import TrainerIncomeScreen from './components/trainer/TrainerIncomeScreen/TrainerIncomeScreen'


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
              <Route path="home">
                <Route index  element={user ? <UserHome childern={<UserHomeScreen />} /> : <LoginPage />} />
                <Route path="getacoach"  element={user ? <UserHome childern={<GetACoachScreen />} /> : <LoginPage />} />
                <Route path="getplans" element={user ? <UserHome childern={<GetPlansScreen />} /> : <LoginPage />}/>
                <Route path="myplans"  element={user ? <UserHome childern={<MyPlansScreen />} /> : <LoginPage />}/>
                <Route path='addpost'  element={user ? <UserHome childern={<AddPostScreen/>} /> : <LoginPage />}/>
                <Route path="profile"  element={user ? <UserHome childern={<UserProfileScreen />} /> : <LoginPage />} />
                <Route path="coach/:id"   element={user ? <UserHome childern={<UserTrainerProfileScreen />} /> : <LoginPage />}/>
                <Route path="payment/:id"   element={user ? <UserHome childern={<UserPaymentScreen/>} /> : <LoginPage />}/>

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
                <Route path='paymentreq' element={<AdminLayout/>}/>
              </Route>
            </Route>

            {/* Trainer-side */}
            <Route path="/trainer">
              <Route index element={<TrainerLogin/>} />
              <Route path="home" >
                <Route index element={trainer ?<TrainerHome childern={<TrainerHomeScreen />} /> : <TrainerLogin/>} />
                <Route path="clients"  element={trainer ?<TrainerHome childern={<TrainerClientScreen />} /> : <TrainerLogin/>}/>
                <Route path='tplans' element={trainer ?<TrainerHome childern={<TrainerPlansScreen/>} /> : <TrainerLogin/>}/>
                <Route path='taddpost'  element={trainer ?<TrainerHome childern={<TrainerAddPostScreen/>} /> : <TrainerLogin/>}/>
                <Route path='tprofile'  element={trainer ?<TrainerHome childern={<TrainerProfileScreen/>} /> : <TrainerLogin/>}/>
                <Route path='addplan'  element={trainer ?<TrainerHome childern={<AddPlanScreen/>} /> : <TrainerLogin/>}/>
                <Route path='singleplan/:id'  element={trainer ?<TrainerHome childern={<TrainerSinglePlanScreen/>} /> : <TrainerLogin/>}/>
                <Route path='income'  element={trainer ?<TrainerHome childern={<TrainerIncomeScreen/>} /> : <TrainerLogin/>}/>
              
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
