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