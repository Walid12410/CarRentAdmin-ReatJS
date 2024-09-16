import request from "../../utils/requset";
import { toast } from "react-toastify";
import { offerAction } from "../slices/offer";


// fetch latest offer
export function fetchLatestOffer(){
    return async (dispatch) => {
        try {
            dispatch(offerAction.setLoadingLatestOffer());
            const { data } = await request.get(`/api/offer/all-offer?top=3`);
            dispatch(offerAction.setLatestOffer(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching latest offer";
            dispatch(offerAction.setErrorLatestOffer(errorMessage));
            toast.error(errorMessage);
        }
    }
}