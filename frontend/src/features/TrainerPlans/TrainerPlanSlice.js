import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import TrainerPlanService from './TrainerPlanService'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  allPlans: [],
  trainerPlans: [],
  singlePlan: '',
  isDelete: false,
  trainerOrders:[]
}
// Add-plans
export const AddPlan = createAsyncThunk(
  'trainerPlan/AddPlan',
  async (planData, thunkAPI) => {
    try {
      alert('gotis')
      const token = await thunkAPI.getState().trainerAuth.trainer.token

      return TrainerPlanService.AddPlan(token, planData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// Get-trainer-plan
export const getTrainerPlan = createAsyncThunk(
  'trainerPlan/getTrainerPlan',
  async (trId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
     return TrainerPlanService.getTrainerPlan(token, trId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// delete-plans
export const deletePlans = createAsyncThunk(
  'trainerPlan/deleteTrainerPlan',
  async (planId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPlanService.deletePlan(token, planId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// single-plan
export const getSinglePlan = createAsyncThunk(
  'trainerPlan/getsinglePlsn',
  async (planId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPlanService.getSinglePlan(token, planId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }, 
)

// get-order
export const getTrainerOrders = createAsyncThunk(
  "trainerPlan/getTrainerOrders",
  async(t,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPlanService.getTrainerOrders(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)
// payment-request
export const paymentRequest = createAsyncThunk(
  "trainerPlan/paymentRequest",
  async(orderId,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPlanService.paymentRequest(token,orderId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)
// create-slice
const TrainerPlanSlice = createSlice({
  name: 'trainerPlan',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = false
      state.isDelete= false
    },
  },
  extraReducers: {
    // Add-plans
    [AddPlan.pending]: (state) => {
      state.isLoading = true
    },
    [AddPlan.fulfilled]: (state) => {
      state.isSuccess = true
      state.isLoading = false
      state.isError = false
    },
    [AddPlan.rejected]: (state, action) => {
      state.isError = true
      state.isSuccess = false
      state.isLoading = false
      state.message = action.payload
    },
    // get-trainer-plan
    [getTrainerPlan.pending]: (state) => {
      state.isLoading = true
    },
    [getTrainerPlan.fulfilled]: (state,action) => {
      console.log('yes', action.payload)
      state.isError = false
      state.isLoading = false
      state.trainerPlans = action.payload
    },
    [getTrainerPlan.rejected]: (state, action) => {
      console.log('no', action.payload)
      state.isError = true
      state.isLoading = false
      state.message = action.payload
      state.isSuccess = false
    },
    [getSinglePlan.pending]: (state, action) => {
      state.isLoading = true
    },
    [getSinglePlan.fulfilled]: (state, action) => {
      state.singlePlan = action.payload
      state.isLoading = false
      state.isError = false
    },
    [getSinglePlan.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    },
    // delete-plan
    [deletePlans.pending]: (state, action) => {
      state.isLoading = true
    },
    [deletePlans.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isDelete = true
    },
    [deletePlans.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.isDelete = false
    },
    // getTrainerOrders
    [getTrainerOrders.pending]:(state)=>{
      state.isLoading=true
    },
    [getTrainerOrders.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.isError=false
      state.trainerOrders=action.payload
    },
    [getTrainerOrders.rejected]:(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.message=action.payload
    },
    // paymentRequest
    [paymentRequest.pending]:(state)=>{
      state.isLoading=true;
    },
    [paymentRequest.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.isError=false
      state.isSuccess=true
    },
    [paymentRequest.rejected]:(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.message=action.payload
    }
  },
})

export const { reset } = TrainerPlanSlice.actions
export default TrainerPlanSlice.reducer
