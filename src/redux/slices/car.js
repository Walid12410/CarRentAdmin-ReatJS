import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    latestCar: [],
    loadingLatestCar: false,
    errorLatestCar: null,
  },
  reducers: { 
    setLatestCar: (state, action) => {
      state.latestCar = action.payload;
      state.loadingLatestCar = false;
      state.errorLatestCar = null;
    },
    setLoadingLatestCar: (state) => {
      state.loadingLatestCar = true;
    },
    setErrorLatestCar: (state, action) => {
      state.loadingLatestCar = false;
      state.errorLatestCar = action.payload;
    },
  },
});

const carReducer = carSlice.reducer;
const carAction = carSlice.actions;

export { carReducer, carAction };
