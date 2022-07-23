import * as api from "../../API/Trainer"

const AllTrainers = async()=>{
      const {data} =await api.AllTrainers()
      return data
}
const singleTrainerDetails = async(token,trId)=>{
      const config={
            headers:{
                  Authorization:`Bearer ${token}`
            }
      }
      // const {data}= await api.singleTrainerDetails(trId,config)
      // return data
}
export const FeatchTrainersService ={
          AllTrainers,
          singleTrainerDetails
}
export default FeatchTrainersService