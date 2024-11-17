import { toast } from "react-toastify";
import { carModelAction } from "../slices/carMake";
import request from "../../utils/requset";


// fetch all car model
export function fetchCarMake(){
    return async (dispatch) => {
        try {
            dispatch(carModelAction.setLoadingCarModel());
            const { data } = await request.get('/api/car-make');
            dispatch(carModelAction.setCarModel(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching car model";
            dispatch(carModelAction.setErrorCarModel(errorMessage));
            toast.error(errorMessage);
        }
    }
}