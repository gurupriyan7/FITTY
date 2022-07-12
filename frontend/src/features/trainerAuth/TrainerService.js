import axios from 'axios'
import * as api from "../../API/Trainer"

import {
  TRAINER_DELETE,
  TRAINER_LOGIN,
  TRAINER_REGISTER,
  TRAINER_UPDATE,
  TRAINERS,
} from '../../constants/trainerConstants'

// Login-Trainer
const trainerLogin = async (trainerData)=>{
          const {data} = await api.loginTrainer(trainerData)

          if(data){
                    localStorage.setItem("trainer",JSON.stringify(data))
          }
          return data
}

// Logout-Trainer
const trainerLogout= ()=>{
          localStorage.removeItem("trainer")
}

 const trainerService={
          trainerLogin,
          trainerLogout
}

export default trainerService