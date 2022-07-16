import axios from 'axios'
import {
  TRAINER_DELETE,
  TRAINER_LOGIN,
  TRAINER_REGISTER,
  TRAINER_UPDATE,
  GET_TRAINERS,
} from '../constants/trainerConstants'

const BACKEND_URL = 'http://localhost:5000/api'

const API = axios.create({
  baseURL: `${BACKEND_URL}/trainer`,
  withCredentials: true,
})

// Trainer-endpoints

export const loginTrainer = (trainerData) =>
  API.post(TRAINER_LOGIN, trainerData)

  export const AllTrainers = ()=>API.get(GET_TRAINERS)
