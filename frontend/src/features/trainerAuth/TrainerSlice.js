import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { errorMessage } from '../ErrorHandle/errorMessage'
import trainerService from './TrainerService'

// Get-trainer-from-localStorage
const trainer = JSON.parse(localStorage.getItem('trainer'))

const initialState = {
  trainer: trainer ? trainer : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Login-trainer
export const trainerLogin = createAsyncThunk(
  'trainerAuth/trainerLogin',
  async (trainerData, thunkAPI) => {
    try {
      return await trainerService.trainerLogin(trainerData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error));
    }
  },
)

// trainer-Logout
export const trainerLogout = createAsyncThunk(
  'trainerAuth/trainerLogout',
  async () => {
    try {
      
      return await trainerService.trainerLogout()
    } catch (error) {
      console.log(error);
    }
  },
)

// create-slice
export const trainerSlice = createSlice({
  name: 'trainerAuth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: {
    // Login-case
    [trainerLogin.pending]: (state) => {
      state.isLoading = true
    },
    [trainerLogin.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.message = ''
      state.trainer = action.payload
    },
    [trainerLogin.rejected]: (state, action) => {
      state.isError = true
      state.isSuccess = false
      state.isLoading = false
      state.message = action.payload
      state.trainer = null
    },
    // logout-case
    [trainerLogout.fulfilled]: (state) => {
      state.trainer = null
      state.isSuccess = false
    },
  },
})

export const { reset } = trainerSlice.actions
export default trainerSlice.reducer
