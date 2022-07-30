import * as api from '../../API/User'


// Register- user
const register = async (userdata) => {
  const { data } = await api.registerUser(userdata)
  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }
  return data
}

// logout-user
const logout = async () => {
  localStorage.removeItem('user')
}

// Login-user
const login = async (userdata) => {
  const { data } = await api.loginUser(userdata)
  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }
  return data
}
// edit-user
const updateUser = async (token, userdata) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.editUser(userdata,config)

  if (data) {
    await localStorage.setItem('user', JSON.stringify(data))
  }
  return data
}
// login-with-login
const googleLogin = async(userdata)=>{
  const {data} = await api.googleLogin(userdata)
  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }
  return data
}

const authService = {
  register,
  logout,
  login,
  updateUser,
  googleLogin
}

export default authService
