import { createSlice } from "@reduxjs/toolkit";

const carModelSlice = createSlice({
  name: "carModel",
  initialState: {
    carMake: [],
    loadingCarMake: false,
    errorCarMake: null,
  },
  reducers: { 
    setCarModel: (state, action) => {
      state.carMake = action.payload;
      state.loadingCarMake = false;
      state.errorCarMake = null;
    },
    setLoadingCarModel: (state) => {
      state.loadingCarMake = true;
    },
    setErrorCarModel: (state, action) => {
      state.loadingCarMake = false;
      state.errorCarMake = action.payload;
    },
  },
});

const carModelReducer = carModelSlice.reducer;
const carModelAction = carModelSlice.actions;

export { carModelAction, carModelReducer };
