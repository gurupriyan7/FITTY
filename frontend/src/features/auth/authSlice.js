import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { errorMessage } from "../ErrorHandle/errorMessage";


// Get-user-from-localStorage
const user = JSON.parse(localStorage.getItem("user"));


// set-initial-state
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isAdiminLoading: false,
  message: "",
};

// Register-the user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error));
    }
  }
);

// Logout-user
export const logout = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

// Login-user
export const login = createAsyncThunk(
  "auth/login",
  async (userdata, thunkAPI) => {
    try {
      return await authService.login(userdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error));
    }
  }
);

// edit-user
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await authService.updateUser(token,userData)

    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)
// google-login
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async(userData,thunkAPI)=>{
    try {
     
      return await authService.googleLogin(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// create-slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isAdiminLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    // Register-case
    [register.pending]: (state) => {
      state.isAdiminLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isAdiminLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
    },
    [register.rejected]: (state, action) => {
      state.isAdiminLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },

    // Logout-case
    [logout.fulfilled]: (state) => {
      state.user = null;
      state.isSuccess = false;
    },

    // Login-case
    [login.pending]: (state) => {
      state.isAdiminLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isAdiminLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
    },
    [login.rejected]: (state, action) => {
      state.isAdiminLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    //update-user-case
    [updateUser.pending] :(state)=>{
      state.isAdiminLoading=true
    },
    [updateUser.fulfilled]:(state,action)=>{
      state.isError=false
      state.isSuccess=true
      state.isAdiminLoading=false
      state.user=action.payload
    },
    [updateUser.rejected]:(state,action)=>{
      state.isError=true
      state.isAdiminLoading=false
      state.isSuccess=false
    },
    // google-login
    [googleLogin.pending]:(state)=>{
      state.isAdiminLoading=true
    },
    [googleLogin.fulfilled]:(state,action)=>{
      state.isAdiminLoading = false;
      state.user = action.payload;
      state.isSuccess = true;
    },
    [googleLogin.rejected]:(state,action)=>{
      state.isAdiminLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    }
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
