import axios from "axios";
import {ADMIN,ADMIN_LOGIN} from '../../constants/Adminconstants'



// Admin-Login
const login = async(adminData)=>{
          const response = await axios.post(ADMIN_LOGIN,adminData)

          if(response.data){
                    localStorage.setItem("admin",JSON.stringify(response.data))
          }
          return response.data
}

const logout = async()=>{
        await  localStorage.removeItem("admin")
}

const adminService = {
          login,logout
}
export default adminService;