import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : "auth",
    initialState: {
        firstName : null,
        lastName : null,
        isAdmin : false,
    },
    reducers : {
        login : (state,action) => {
            state.firstName = action.payload.firstName,
            state.firstName = action.payload.lastName,
            state.isAdmin = action.payload.isAdmin
        },
        logout : (state) =>{
            state.firstName = null;
            state.lastName = null;
            state.isAdmin = false;
        }
    }
});

const authReducer = authSlice.reducer;
const authAction = authSlice.actions;

export { authAction, authReducer}