import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offer",
  initialState: {
    // Get Offer of company
    companyOffers: [],
    loadingCompanyOffer : false,
    errorCompanyOffers: null,
    // Count Offers for company
    companyOfferCount : null,
    // create new offer
    isOfferCreated : false,
    loadingCreatingOffer : false,
    // update offer
    isOfferUpdated : false,
    loadingOfferUpdated : false,
    // delte offer
    isOfferDeleted : false,
    loadingDeleteOffer : false,
    // Get all offer
    offers: [],
    loadingOffers : false,
    errorOffers : false,
    // count all offers 
    offersCount : null
  },
  reducers: { 
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
    },
    // offer update
    setLoadingUpdateOffer : (state) => {
      state.loadingOfferUpdated = true;
    },
    setIsOfferUpdated : (state) => {
      state.loadingOfferUpdated = false;
      state.isOfferUpdated = true;
    },
    setClearOfferUpdated : (state) => {
      state.loadingOfferUpdated = false;
      state.isOfferUpdated = false;
    },
    // delete offer
    setLoadingDeleteOffer : (state) => {
      state.loadingDeleteOffer = true;
    },
    setIsOfferDeleted : (state) => {
      state.loadingDeleteOffer = false;
      state.isOfferDeleted = true;
    },
    setClearOfferDeleted: (state) => {
      state.loadingDeleteOffer = false;
      state.isOfferDeleted = false;
    },
    // get all offers
    setOffers : (state,action) =>{
      state.offers = action.payload;
      state.loadingOffers = false;
    },
    setLoadingOffers : (state) =>{
      state.loadingOffers = true;
    },
    setErrorOffers : (state , action ) => {
      state.loadingOffers = false;
      state.errorOffers = action.payload;
    },
    // count all ofers
    setCountOffers : (state,action) => {
      state.offersCount = action.payload;
    }
  },
});

const offerReducer = offerSlice.reducer;
const offerAction = offerSlice.actions;

export { offerReducer, offerAction };
