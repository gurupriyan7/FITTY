import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import FeatchTrainersService from '../featchTrainers/FeatchTrainersService'

const initialState = {
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
  trainers: [],
  singleTrainer:''
}

// All-trainers
export const AllTrainers = createAsyncThunk(
  'trainerAuth/AllTrainers',
  async (data, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await FeatchTrainersService.AllTrainers(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// single-trainer
export const singleTrainer = createAsyncThunk(
  "trainer/singleTrainer",
  async(trId,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await FeatchTrainersService.singleTrainerDetails(token,trId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// create-slice
const featchTrainersSlice = createSlice({
  name: 'featchTrainers',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
      state.trainers = []
    },
  },
  extraReducers: {
    [AllTrainers.pending]: (state) => {
      state.isLoading = true
    },
    [AllTrainers.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.trainers = action.payload
    },
    [AllTrainers.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})

export const { reset } = featchTrainersSlice.actions
export default featchTrainersSlice.reducer
