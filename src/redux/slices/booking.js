import { createSlice } from "@reduxjs/toolkit";

const bookingModelSlice = createSlice({
  name: "booking",
  initialState: {
    companyBooking: [],
    loadingCompanyBooking: false,
  },
  reducers: { 
    setCompanyBooking: (state, action) => {
      state.companyBooking = action.payload;
      state.loadingCompanyBooking = false;
    },
    setLoadingCompanyBooking: (state) => {
      state.loadingCompanyBooking = true;
    },

  },
});

const bookingReducer = bookingModelSlice.reducer;
const bookingAction = bookingModelSlice.actions;

export { bookingAction, bookingReducer };
