import axios from 'axios'
import * as api from '../../API/Trainer'

// Login-Trainer
const trainerLogin = async (trainerData) => {
  const { data } = await api.loginTrainer(trainerData)

  if (data) {
    localStorage.setItem('trainer', JSON.stringify(data))
  }
  return data
}

// Logout-Trainer
const trainerLogout = () => {
  localStorage.removeItem('trainer')
}

// All-Trainers
const AllTrainers = async () => {
  const { data } = await api.AllTrainers()
  return data
}

const trainerService = {
  trainerLogin,
  trainerLogout,
  AllTrainers,
}

export default trainerService
