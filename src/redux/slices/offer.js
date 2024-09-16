import { createSlice } from "@reduxjs/toolkit";

const offerSlice = createSlice({
  name: "offer",
  initialState: {
    latestOffer: [],
    loadingLatestOffer: false,
    errorLatestOffer: null,
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
  },
});

const offerReducer = offerSlice.reducer;
const offerAction = offerSlice.actions;

export { offerReducer, offerAction };
