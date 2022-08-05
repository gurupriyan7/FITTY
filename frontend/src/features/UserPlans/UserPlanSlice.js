import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import UserPlanService from './UserPlanService'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  allPlans: [],
  singleplan: [],
  trainerPlans:[],
  userOwnPlans:[]
}

// All-plans
export const getAllPlans = createAsyncThunk(
  'userPlan/getAllPlans',
  async (u, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return UserPlanService.getAllPlans(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)


// Get-single-plan
export const getSinglePlan = createAsyncThunk(
   "userPlan/getSinglePlan",
   async(planId,thunkAPI)=>{
      try {
         const token = await thunkAPI.getState().auth.user.token
         return UserPlanService.getSinglePlan(token,planId)
      } catch (error) {
         thunkAPI.rejectWithValue(errorMessage(error))
      }
   }
)
// Get-single-user-plans
export const getSingleTrainerPlans = createAsyncThunk(
  "userPlan/getSingleTrainerPlans",
  async(trId,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().auth.user.token
      return UserPlanService.getSingleTrainerPlans(token,trId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// Get-user-own-plans
export const getUserOwnPlans=createAsyncThunk(
  "userPlan/getUserOwnPlans",
  async(u,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().auth.user.token
      return UserPlanService.getUserOwnPlans(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)


// Create-slice
const UserPlanSlice = createSlice({
  name: 'userPlan',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = false
    },
  },
  extraReducers: {
    // all-plans
    [getAllPlans.pending]: (state) => {
      state.isLoading = true
    },
    [getAllPlans.fulfilled]: (state, action) => {
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.allPlans = action.payload
    },
    [getAllPlans.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
    },
   //  get-single-plan
   [getSinglePlan.pending]:(state)=>{
      state.isLoading=true
   },
   [getSinglePlan.fulfilled]:(state,action)=>{
      state.isError=false
      state.isLoading=false
      state.singleplan=action.payload
   },
   [getSinglePlan.rejected]:(state,action)=>{
      state.isError=true
      state.isLoading=false
      state.message=action.payload
   },
   //  getSingleTrainerPlans
   [getSingleTrainerPlans.pending]:(state)=>{
    state.isLoading=true
   },
   [getSingleTrainerPlans.fulfilled]:(state,action)=>{
    state.isError=false
    state.isLoading=false
    state.trainerPlans=action.payload
   },
   [getSingleTrainerPlans.rejected]:(state,action)=>{
    state.isError=true
    state.isLoading=false
    state.message=action.payload
   },
  //  getUserOwnPlans
  [getUserOwnPlans.pending]:(state)=>{
    state.isLoading=true
  },
  [getUserOwnPlans.fulfilled]:(state,action)=>{
    state.isLoading=false
    state.isError=false
    state.userOwnPlans=action.payload
  },
  [getUserOwnPlans.rejected]:(state,action)=>{
    state.isLoading=false
    state.isError=true
    state.message=action.payload
  },
  

  
  },
})

export const { reset } = UserPlanSlice.actions
export default UserPlanSlice.reducer
