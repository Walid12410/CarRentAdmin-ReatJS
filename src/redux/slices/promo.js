import { createSlice } from "@reduxjs/toolkit";

const promoSlice = createSlice({
  name: "promo",
  initialState: {
    companyPromo: [],
    loadingCompanyPromo: false,
    errorCompanyPromo: null,
    companyPromoCount: null,
    // create promo
    isPromoCreated : false,
    loadingPromoCreated : false,
    // deleted promo
    loadingDeletingPromo : false,
    isPromoDeleted : false
  },
  reducers: {
    // get company promo 
    setCompanyPromo: (state, action) => {
      state.companyPromo = action.payload;
      state.loadingCompanyPromo = false;
      state.errorCompanyPromo = null;
    },
    setLoadingCompanyPromo: (state) => {
      state.loadingCompanyPromo = true;
    },
    setErrorCompanyPromo: (state, action) => {
      state.loadingCompanyPromo = false;
      state.errorCompanyPromo = action.payload;
    },
    // count company promo
    setCompanyPromoCount : (state , action) => {
        state.companyPromoCount = action.payload;
    },
    // create new promo
    setIsPromoCreated : (state) => {
      state.isPromoCreated = true;
      state.loadingPromoCreated = false;
    },
    setLoadingPromoCreating : (state) => {
      state.loadingPromoCreated = true;
    },
    setClearPromoCreated : (state) => {
      state.isPromoCreated = false;
      state.loadingPromoCreated  =false;
    },
    // delete promo
    setIsPromoDeleted : (state) => {
      state.isPromoDeleted = true;
      state.loadingDeletingPromo = false;
    },
    setLoadingPromoDeleted : (state) => {
      state.loadingDeletingPromo = true;
    },
    setClearPromoDeleted : (state) => {
      state.loadingDeletingPromo = false;
      state.isPromoDeleted = false; 
    }
  },
});

const promoReducer = promoSlice.reducer;
const promoAction = promoSlice.actions;

export { promoReducer, promoAction };
