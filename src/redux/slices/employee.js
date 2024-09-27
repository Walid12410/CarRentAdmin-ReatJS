import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    loadingEmployees: false,
    errorEmployees: null,
    loadingCreateEmployee : false,
    isEmployeeCreated : false,
  },
  reducers: { 
    setEmployees: (state, action) => {
      state.employees = action.payload;
      state.loadingEmployees = false;
      state.errorEmployees = null;
    },
    setLoadingEmployees: (state) => {
      state.loadingEmployees = true;
    },
    setErrorEmployees: (state, action) => {
      state.loadingEmployees = false;
      state.errorEmployees = action.payload;
    },
    // Create New Employee
    setIsEmoloyeeCreated : (state)=> {
      state.isEmployeeCreated = true;
      state.loadingCreateEmployee = false
    },
    setLoadingEmpolyeeCreated : (state) => {
      state.loadingCreateEmployee = true;
    },
    setClearEmployeeCreated : (state) => {
      state.loadingCreateEmployee = false;
      state.isEmployeeCreated = false;
    },
  },
});

const employeeReducer = employeeSlice.reducer;
const employeeAction = employeeSlice.actions;

export { employeeReducer, employeeAction };
