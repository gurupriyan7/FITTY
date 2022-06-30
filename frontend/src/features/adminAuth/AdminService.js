import axios from "axios";
import {ADMIN,ADMIN_LOGIN} from '../../constants/Adminconstants'
import { USER_REGISTER,GET_USER } from "../../constants/userConstants";



// Admin-Login
const login = async(adminData)=>{
          const response = await axios.post(ADMIN_LOGIN,adminData)

          if(response.data){
                    localStorage.setItem("admin",JSON.stringify(response.data))
          }
          return response.data
}
// Admin-Logout
const logout = async()=>{
        await  localStorage.removeItem("admin")
}

// Add-User
const AddUsers = async(userData)=>{
const response = await axios.post(USER_REGISTER,userData)

return response.data
}

// All-Users
const AllUsers = async()=>{
        const response = await axios.get(GET_USER)
        console.log("eeee",response.data);
        return response.data
}

 
const adminService = {
          login,logout,AddUsers,AllUsers
}
export default adminService;