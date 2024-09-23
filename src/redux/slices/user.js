import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loadingUsers: false,
    errorUsers: null,
    usersCount : null
  },
  reducers: { 
    // Total User
    setUserCount : (state,action) => {
      state.usersCount = action.payload;
    },
    // Get Users
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loadingUsers = false;
    },
    setLoadingUsers: (state) => {
      state.loadingUsers = true;
    },
    setErrorUsers: (state, action) => {
      state.loadingUsers = false;
      state.errorUsers = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;
const userAction = userSlice.actions;

export { userReducer, userAction };
