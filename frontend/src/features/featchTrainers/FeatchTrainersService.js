import * as api from "../../API/Trainer"

const AllTrainers = async()=>{
      const {data} =await api.AllTrainers()
      return data
}
export const FeatchTrainersService ={
          AllTrainers
}
export default FeatchTrainersService