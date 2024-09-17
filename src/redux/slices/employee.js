import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    loadingEmployees: false,
    errorEmployees: null,
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
  },
});

const employeeReducer = employeeSlice.reducer;
const employeeAction = employeeSlice.actions;

export { employeeReducer, employeeAction };
