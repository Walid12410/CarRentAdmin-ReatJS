import { toast } from "react-toastify";
import { carAction } from "../slices/car";
import request from "../../utils/requset";


// fetch latest car
export function fetchLatestCar(){
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
            const {data} = await request.get(`/api/car-rent?pageNumber=${pageNumber}&car_rent_per_page=6&isAdmin=1`);
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
            const {data} = await request.get(`/api/car-rent/count`);
            dispatch(carAction.setCarsCount(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count cars"
            toast.error(errorMessage);
        }
    }
}

// fetch one car
export function fetchOneCar(carId){
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