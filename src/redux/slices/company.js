import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    loadingCompanies: false,
    errorCompanies: null,
  },
  reducers: { 
    setComapnies: (state, action) => {
      state.companies = action.payload;
      state.loadingCompanies = false;
      state.errorCompanies = null;
    },
    setloadingCompanies: (state) => {
      state.loadingCompanies = true;
    },
    setErrorCompanies: (state, action) => {
      state.loadingCompanies = false;
      state.errorCompanies = action.payload;
    },
  },
});

const companyReducer = companySlice.reducer;
const companyAction = companySlice.actions;

export { companyReducer, companyAction };
