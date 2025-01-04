import { createSlice } from "@reduxjs/toolkit";

const bookingModelSlice = createSlice({
  name: "booking",
  initialState: {
    companyBooking: [],
    loadingCompanyBooking: false,
    // count company booking
    companyBookingCount: null,
  },
  reducers: { 
    setCompanyBooking: (state, action) => {
      state.companyBooking = action.payload;
      state.loadingCompanyBooking = false;
    },
    setLoadingCompanyBooking: (state) => {
      state.loadingCompanyBooking = true;
    },
    // company booking count
    setCompanyBookingCount: (state, action) => {
      state.companyBookingCount = action.payload;
    }
  },
});

const bookingReducer = bookingModelSlice.reducer;
const bookingAction = bookingModelSlice.actions;

export { bookingAction, bookingReducer };
