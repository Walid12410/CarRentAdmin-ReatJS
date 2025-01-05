import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { categoryReducer } from "./slices/category";
import { carReducer } from "./slices/car";
import { offerReducer } from "./slices/offer";
import { companyReducer } from "./slices/company";
import { employeeReducer } from "./slices/employee";
import { userReducer } from "./slices/user";
import { promoReducer } from "./slices/promo";
import { carModelReducer } from "./slices/carMake";
import { bookingReducer } from "./slices/booking";
import { notificationReducer } from "./slices/notification";
import { reviewReducer } from "./slices/review";


const store = configureStore({
    reducer : {
        auth : authReducer,
        category : categoryReducer,
        car : carReducer,
        offer : offerReducer,
        company : companyReducer,
        employee : employeeReducer,
        user : userReducer,
        promo: promoReducer,
        carMake : carModelReducer,
        booking : bookingReducer,
        notification : notificationReducer,
        review : reviewReducer
    },
});


export default store;



