import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { categoryReducer } from "./slices/category";
import { carReducer } from "./slices/car";
import { offerReducer } from "./slices/offer";
import { companyReducer } from "./slices/company";
import { employeeReducer } from "./slices/employee";
import { userReducer } from "./slices/user";


const store = configureStore({
    reducer : {
        auth : authReducer,
        category : categoryReducer,
        car : carReducer,
        offer : offerReducer,
        company : companyReducer,
        employee : employeeReducer,
        user : userReducer
    },
});


export default store;



