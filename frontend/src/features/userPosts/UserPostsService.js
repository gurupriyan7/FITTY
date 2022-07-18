import * as api from "../../API/User"

const userAddpost = async(token,postData)=>{
          const config = {
                    headers:{
                              Authorization:`Bearer ${token}`,
                    }
          }
const {data} = await api.userAddPost(postData,config)

return data
}
export const UserPostsService={
          userAddpost
}
export default UserPostsService