import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    latestCar: [],
    loadingLatestCar: false,
    errorLatestCar: null,
    carsCount : null,
    cars : [],
    loadingCars : false,
    errorCars : null
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
    // Count car
    setCarsCount : (state,action) => {
      state.carsCount = action.payload;
    },
    // fetch cars
    setCars : (state,action) => {
      state.cars = action.payload;
      state.loadingCars = false;
    },
    setLoadingCars : (state) => {
      state.loadingCars  = true;
    },
    setErrorCars : (state , action) => {
      state.loadingCars = false;
      state.errorCars = action.payload
    }
  },
});

const carReducer = carSlice.reducer;
const carAction = carSlice.actions;

export { carReducer, carAction };
