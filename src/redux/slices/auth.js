import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) :null,
    success : false
  },
  reducers: { 
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
  },
});

const authReducer = authSlice.reducer;
const authAction = authSlice.actions;

export { authAction, authReducer };
