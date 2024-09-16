import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { categoryReducer } from "./slices/category";
import { carReducer } from "./slices/car";
import { offerReducer } from "./slices/offer";
import { companyReducer } from "./slices/company";


const store = configureStore({
    reducer : {
        auth : authReducer,
        category : categoryReducer,
        car : carReducer,
        offer : offerReducer,
        company : companyReducer
    },
});


export default store;



