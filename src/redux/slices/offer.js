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
    companyOfferCount : null,
    // create new offer
    isOfferCreated : false,
    loadingCreatingOffer : false
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
    },
    // create offer
    setIsOfferCreated : (state) => {
      state.isOfferCreated = true;
      state.loadingCreatingOffer = true;
    },
    setLoadingCreatingOffer : (state) => {
      state.loadingCompanyOffer = true;
    },
    setClearOfferCreated : (state) => {
      state.isOfferCreated = false;
      state.loadingCreatingOffer = false;
    }
  },
});

const offerReducer = offerSlice.reducer;
const offerAction = offerSlice.actions;

export { offerReducer, offerAction };
