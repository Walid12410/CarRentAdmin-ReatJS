import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null,
    success : false,
    employee: localStorage.getItem("employeeInfo") ? 
    JSON.parse(localStorage.getItem("emploteeInfo")) : null,
    successEmployee : false
  },
  reducers: {
    // admin auth 
    login: (state, action) => {
      state.user = action.payload;
      state.success = true; 
    },
    logout: (state) => {
      state.user = null;
      state.success = false; 
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    //Employee auth
    loginEmployee: (state, action) => {
      state.employee = action.payload;
      state.successEmployee = true;
    },
    logoutEmployee: (state) => {
      state.employee = null;
      state.successEmployee = false;
    },
    setSuccessEmplpoyee: (state, action)=> {
      state.success = action.payload;
    }
  },
});

const authReducer = authSlice.reducer;
const authAction = authSlice.actions;

export { authAction, authReducer };
