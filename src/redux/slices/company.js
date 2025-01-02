import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    loadingCompanies: false,
    errorCompanies: null,
    loadingCreateCompany : false,
    isCompanyCreated : false,
    loadingCompanyDeleted : false,
    isCompanyDeleted : false,
    // get one company
    loadingOneCompany : false,
    company : null,
    // update company
    loadingCompanyUpdated : false,
    isCompanyUpdated : false,
    // company image change
    loadingCompanyImageChange : false,
    isCompanyImageChange : false
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
    //Create Company 
    setLoadingCreateCompany : (state) => {
      state.loadingCreateCompany = true;
    },
    setCompanyCreated : (state) => {
      state.isCompanyCreated = true;
      state.loadingCreateCompany = false;
    },
    setClearCompanyCreated : (state) => {
      state.isCompanyCreated = false;
    },
    // Delete Company
    setIsCompanyDeleted : (state) => {
      state.isCompanyDeleted = true;
      state.loadingCompanyDeleted = false;
    },
    setLoadingCompanyDeleted : (state) => {
      state.loadingCompanyDeleted = true;
    },
    setErorrCompanyDeleted : (state) => {
      state.loadingCompanyDeleted = false;
      state.isCompanyDeleted = false;

    },
    // get one company
    setLoadingCompany(state){
      state.loadingOneCompany = true;
    },
    setCompany : (state , action) => {
      state.company = action.payload;
      state.loadingOneCompany = false;
    },
    setErrorCompany : (state) => {
      state.loadingOneCompany = false;
    },
    // update company
    setLoadingCompanyUpdated : (state) => {
      state.loadingCompanyUpdated = true;
    },
    setCompanyUpdated : (state) => {
      state.loadingCompanyUpdated = false;
      state.isCompanyUpdated = true;
    },
    setClearCompanyUpdated : (state) => {
      state.isCompanyUpdated = false;
      state.loadingCompanyUpdated= false;
    },
    // change company image
    setLoadingCompanyImage : (state) => {
      state.loadingCompanyImageChange = true;
    },
    setIsCompanyImageUpdated: (state) => {
      state.loadingCompanyImageChange = false;
      state.isCompanyImageChange = true;
    },
    setClearCompangImageChange : (state) => {
      state.loadingCompanyImageChange = false;
      state.isCompanyImageChange = false;
    }
}});

const companyReducer = companySlice.reducer;
const companyAction = companySlice.actions;

export { companyReducer, companyAction };
