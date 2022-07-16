import * as api from '../../API/User'

const editUser = async (token, userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.editUser(userData, config)
  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }
  return data
}
export const UpdateUserService = {
  editUser,
}
export default UpdateUserService
