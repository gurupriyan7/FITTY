import * as api from "../../API/User"

// Register- user
const register = async (userdata) => {
  const {data} = await api.registerUser(userdata)
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

// logout-user
const logout = async () => {
  localStorage.removeItem("user");
};

// Login-user
const login = async (userdata) => {
 const {data}= await api.loginUser(userdata)
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
