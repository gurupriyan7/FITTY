import axios from 'axios'
import { ADMIN, ADMIN_LOGIN } from '../../constants/Adminconstants'
import { USER_REGISTER, GET_USER,USER_STATUS } from '../../constants/userConstants'
import { TRAINER_REGISTER, GET_TRAINERS,TRAINER_STATUS, TRAINER_DELETE} from '../../constants/trainerConstants'

// Admin-Login
const login = async (adminData) => {
  const response = await axios.post(ADMIN_LOGIN, adminData)

  if (response.data) {
    localStorage.setItem('admin', JSON.stringify(response.data))
  }
  return response.data
}
// Admin-Logout
const logout = async () => {
  await localStorage.removeItem('admin')
}

// Add-User
const AddUsers = async (userData) => {
  const response = await axios.post(USER_REGISTER, userData)

  return response.data
}

// All-Users
const AllUsers = async () => {
  const response = await axios.get(GET_USER)
  return response.data
}

// Add-Trainer
const AddTrainer = async (TrainerData) => {
  const response = await axios.post(TRAINER_REGISTER, TrainerData)
  console.log(response.data)
  return response.data
}
// All-Trainers
const AllTrainers = async () => {
  const response = await axios.get(GET_TRAINERS)
        if(response.data){
                localStorage.setItem("trainer",JSON.stringify(response.data))
        }
  return response.data

}

// Change-Trainer-status
const changeTrainerStatus =async(trId)=>{
  const response = await axios.put(TRAINER_STATUS+trId) 
 return response.data
}
// delete-trainer
const deleteTrainer=async(trId)=>{
  const response= await axios.delete(TRAINER_DELETE+trId)
  return response.data
}
// change-user-staus
const changeUserStatus = async(userId)=>{
  const response = await axios.put (USER_STATUS+userId)
  return response.data
}

const adminService = {
  login,
  logout,
  AddUsers,
  AllUsers,
  AddTrainer,
  AllTrainers,
  changeTrainerStatus,
  changeUserStatus,
  deleteTrainer
}
export default adminService
