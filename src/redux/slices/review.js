import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    // get company review
    companyreview: [],
    loadingCompanyReview: false,
    errorCompanyReview : null,
    // company review count
    companyReviewCount : null,
    // get all review
    reviews : [],
    loading : false,
    error : null,
    // count review,
    countReview : null
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
    },
    // count review 
    setCountReview : (state,action) => {
      state.countReview = action.payload;
    },
    // get all review
    setReviews : (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
    },
    setLoadingReview : (state) => {
      state.loading = true;
    },
    setErrorReview : (state , action) => {
      state.loading = false;
      state.error = action.payload;
      state.reviews = null;
    }
  },
});

const reviewReducer = reviewSlice.reducer;
const reviewAction = reviewSlice.actions;

export { reviewReducer, reviewAction };
