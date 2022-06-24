import axios from "axios";
import { USER, USER_LOGIN, USER_REGISTER } from "../../constants/userConstants";

// Register- user
const register = async (userdata) => {
  const response = await axios.post(USER_REGISTER, userdata);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// logout-user
const logout = async () => {
  localStorage.removeItem("user");
};

// Login-user
const login = async (userdata) => {
  const response = await axios.post(USER_LOGIN, userdata);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
