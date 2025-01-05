import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    // get company review
    companyreview: [],
    loadingCompanyReview: false,
    errorCompanyReview : null,
    // company review count
    companyReviewCount : null
  },
  reducers: { 
    //  company review
    setComapnyReview: (state, action) => {
      state.companyreview = action.payload;
      state.loadingCompanyReview = false;
    },
    setLoadingCompanyReview: (state) => {
      state.loadingCompanyReview = true;
    },
    setErrorCompanyReview: (state, action) => {
      state.loadingCompanyReview = false;
      state.errorCompanyReview = action.payload;
    },
    // comapny review count 
    setCompanyReviewCount : (state , action) => {
      state.companyReviewCount = action.payload;
    }
  },
});

const reviewReducer = reviewSlice.reducer;
const reviewAction = reviewSlice.actions;

export { reviewReducer, reviewAction };
