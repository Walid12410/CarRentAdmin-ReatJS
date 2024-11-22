import { toast } from "react-toastify";
import { carAction } from "../slices/car";
import request from "../../utils/requset";


// fetch latest car
export function fetchLatestCar() {
    return async (dispatch) => {
        try {
            dispatch(carAction.setLoadingLatestCar());
            const { data } = await request.get('/api/car-rent?pageNumber=1');
            dispatch(carAction.setLatestCar(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching latest car"
            dispatch(carAction.setErrorLatestCar(errorMessage));
            toast.error(errorMessage);
        }
    }
}

// fetch cars by page number
export function fetchCars(pageNumber) {
    return async (dispatch) => {
        try {
            dispatch(carAction.setLoadingCars());
            const { data } = await request.get(`/api/car-rent?pageNumber=${pageNumber}&car_rent_per_page=6&isAdmin=1`);
            dispatch(carAction.setCars(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching cars"
            dispatch(carAction.setErrorCars(errorMessage));
            toast.error(errorMessage);
        }
    }
}

// Count Cars
export function countCar() {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/car-rent/count`);
            dispatch(carAction.setCarsCount(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count cars"
            toast.error(errorMessage);
        }
    }
}

// fetch one car
export function fetchOneCar(carId) {
    return async (dispatch) => {
        try {
            dispatch(carAction.setLoadingCar());
            const { data } = await request.get(`/api/car-rent/${carId}`);
            dispatch(carAction.setCar(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching car"
            dispatch(carAction.setErrorCar());
            toast.error(errorMessage);
        }
    }
}

// fetch company car
export function fetchCompanyCar(pageNumber) {
    return async (dispatch, getState) => {
        try {
            dispatch(carAction.setLoadingCompanyCar());
            const { data } = await request.get(`/api/car-rent?company=${getState().auth.employee.companyID}&companyPageNumber=${pageNumber}&companyLimitPage=6`)
            dispatch(carAction.setCompanyCar(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetch company car"
            dispatch(carAction.setErrorCompanyCar(errorMessage));
            toast.error(errorMessage);
        }
    }
}


// count company car
export function countCompanyCar() {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.get(`/api/car-rent/count?companyId=${getState().auth.employee.companyID}`);
            dispatch(carAction.setCompanyCarCount(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count cars"
            toast.error(errorMessage);
        }
    }
}


// Create new Car
export function CreateNewCar(newCar, carImage) {
    return async (dispatch, getState) => {
        try {
            dispatch(carAction.setLoadingCarCreated());
            const carResponse = await request.post(`/api/car-rent`,newCar, {
                headers: {
                    Authorization: "Bearer " + getState().auth.employee.token,
                    "Content-Type": "application/json"
                }
            });
            const carId = carResponse.data.carId;
            await request.post(`/api/car-rent/car-image/${carId}`,carImage,{
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type" : "multipart/from-data"
                }
            });
            dispatch(carAction.setIsCarCreated());
            toast.success("new car created successfully!");
            setTimeout(()=> dispatch(carAction.setClearCarCreated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error create new car";
            toast.error(errorMessage);
            dispatch(carAction.setClearCarCreated());
        }
    }
}


// Update car
export function UpdateCar(carId , carData) {
    return async(dispatch , getState) => {
        try {
            dispatch(carAction.setLoadingCarUpdated());
            await request.put(`api/car-rent/${carId}`,carData,{
                headers : {
                    Authorization : "Bearer " +getState().auth.employee.token,
                    "Content-Type" : "application/json"
                }
            });
            dispatch(carAction.setIsCarUpdated());
            setTimeout(()=> dispatch(carAction.setClearCarUpdated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating car";
            toast.error(errorMessage);
            dispatch(carAction.setClearCarUpdated());
        }
    }
}