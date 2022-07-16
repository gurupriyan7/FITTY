import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import UpdateUserService from './UpdateUserService'
const initialState = {
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
  singleUser: '',
}

// edit-user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userData,thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token

      return await UpdateUserService.editUser(token, userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
//create-slice
const UpdateUserSlice = createSlice({
  name: 'updateusers',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = true
      state.singleUser = action.payload
    },
    [updateUser.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})

export const { reset } = UpdateUserSlice.actions
export default UpdateUserSlice.reducer
