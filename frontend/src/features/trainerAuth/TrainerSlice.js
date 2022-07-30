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
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// google-login
export const tgoogleLogin = createAsyncThunk(
  "tgoogleLogin",
  async(trainerData,thunkAPI)=>{
    try {
      return await trainerService.tgoogleLogin(trainerData)
      
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// trainer-Logout
export const trainerLogout = createAsyncThunk(
  'trainerAuth/trainerLogout',
  async () => {
    try {
      return await trainerService.trainerLogout()
    } catch (error) {
     
    }
  },
)

// edit-Trainer
export const updateTrainer = createAsyncThunk(
  "trainerAuth/updateTrainer",
  async(trainerData,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return await trainerService.updateTrainer(token,trainerData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
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
      state.trainer = action.payload
    },
    [trainerLogin.rejected]: (state, action) => {
      console.log("error",action.payload)
      state.isError = true
      state.isSuccess = false
      state.isLoading = false
      state.message = action.payload
      state.trainer = null
    },
    // google-login
    [tgoogleLogin.pending]: (state) => {
      console.log("pendinggg");
      state.isLoading = true
    },
    [tgoogleLogin.fulfilled]: (state, action) => {
      console.log("success",action);
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.trainer = action.payload
    },
    [tgoogleLogin.rejected]: (state, action) => {
      console.log("error",action.payload);
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
    // Update-trainer-case
    [updateTrainer.pending]:(state)=>{
      state.isLoading=true
    },
    [updateTrainer.fulfilled]:(state,action)=>{
      state.isSuccess=true 
      state.isError=false
      state.isLoading=false
      state.trainer=action.payload
    },
    [updateTrainer.rejected]:(state,action)=>{
      state.isError=true
      state.isLoading=false
      state.isSuccess=false
      state.message=action.payload
    }
   
  },
})

export const { reset } = trainerSlice.actions
export default trainerSlice.reducer
