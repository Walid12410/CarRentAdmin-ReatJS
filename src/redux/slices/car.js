import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    latestCar: [],
    loadingLatestCar: false,
    errorLatestCar: null,
    carsCount: null,
    cars: [],
    loadingCars: false,
    errorCars: null,
    car: null,
    loadingCar: false,
    companyCars: [],
    loadingCompanyCars: false,
    errorCompanyCars: null,
    companyCarsCount: null,
    // Create New Car
    isCarCreated: false,
    loadingCarCreate: false,
    // Update Car
    isCarUpdated: false,
    loadingUpdateCar: false
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
    setCarsCount: (state, action) => {
      state.carsCount = action.payload;
    },
    // fetch cars
    setCars: (state, action) => {
      state.cars = action.payload;
      state.loadingCars = false;
    },
    setLoadingCars: (state) => {
      state.loadingCars = true;
    },
    setErrorCars: (state, action) => {
      state.loadingCars = false;
      state.errorCars = action.payload
    },
    // Get one car
    setCar: (state, action) => {
      state.loadingCar = false;
      state.car = action.payload;
    },
    setLoadingCar: (state) => {
      state.loadingCar = true;
    },
    setErrorCar: (state) => {
      state.loadingCar = false;
    },
    // fetch company car
    setCompanyCar: (state, action) => {
      state.companyCars = action.payload;
      state.loadingCompanyCars = false;
      state.errorCompanyCars = null;
    },
    setLoadingCompanyCar: (state) => {
      state.loadingCompanyCars = true;
    },
    setErrorCompanyCar: (state, action) => {
      state.loadingCompanyCars = false;
      state.errorCompanyCars = action.payload;
    },
    // count company car
    setCompanyCarCount: (state, action) => {
      state.companyCarsCount = action.payload;
    },
    // Create New Car
    setIsCarCreated: (state) => {
      state.isCarCreated = true;
      state.loadingCarCreate = false;
    },
    setLoadingCarCreated: (state) => {
      state.loadingCarCreate = true;
    },
    setClearCarCreated: (state) => {
      state.isCarCreated = false;
      state.loadingCarCreate = false;
    },
    // Update Car
    setIsCarUpdated: (state) => {
      state.isCarUpdated = true;
      state.loadingUpdateCar = false;
    },
    setLoadingCarUpdated : (state) => {
      state.loadingUpdateCar = true;
    },
    setClearCarUpdated: (state) => {
      state.isCarUpdated = false;
      state.loadingUpdateCar = false;
    }
  },
});

const carReducer = carSlice.reducer;
const carAction = carSlice.actions;

export { carReducer, carAction };
