import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offer",
  initialState: {
    latestOffer: [],
    loadingLatestOffer: false,
    errorLatestOffer: null,
    // Get Offer of company
    companyOffers: [],
    loadingCompanyOffer : false,
    errorCompanyOffers: null,
    // Count Offers for company
    companyOfferCount : null
  },
  reducers: { 
    setLatestOffer: (state, action) => {
      state.latestOffer = action.payload;
      state.loadingLatestOffer = false;
      state.errorLatestOffer = null;
    },
    setLoadingLatestOffer: (state) => {
      state.loadingLatestOffer = true;
    },
    setErrorLatestOffer: (state, action) => {
      state.loadingLatestOffer = false;
      state.errorLatestOffer = action.payload;
    },
    // Get Offers of company
    setCompanyOffer : (state, action) => {
      state.companyOffers = action.payload;
      state.loadingCompanyOffer = false;
      state.errorCompanyOffers = null;
    },
    setLoadingCompanyOffer: (state) => {
      state.loadingCompanyOffer = true;
    },
    setErrorCompanyOffer : (state, action) => {
      state.errorCompanyOffers = action.payload;
      state.loadingCompanyOffer = false;
    },
    // Count Offer for company
    setCountCompanyOffers : (state,action) => {
      state.companyOfferCount = action.payload;
    }
  },
});

const offerReducer = offerSlice.reducer;
const offerAction = offerSlice.actions;

export { offerReducer, offerAction };
