import axios from 'axios'

import {
  TRAINER_DELETE,
  TRAINER_LOGIN,
  TRAINER_REGISTER,
  TRAINER_UPDATE,
  TRAINERS,
} from '../../constants/trainerConstants'

// Login-Trainer
const trainerLogin = async (trainerData)=>{
          const response = await axios.post(TRAINER_LOGIN,trainerData)

          if(response.data){
                    localStorage.setItem("trainer",JSON.stringify(response.data))
          }
          return response.data
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