import request from "../../utils/requset";
import { toast } from "react-toastify";
import { offerAction } from "../slices/offer";


// fetch latest offer
export function fetchLatestOffer() {
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


// count offer company
export function countCompanyOffers() {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.get(`/api/offer/count?companyId=${getState().auth.employee.companyID}`);
            dispatch(offerAction.setCountCompanyOffers(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count documention for offer";
            toast.error(errorMessage);
        }
    }
}


// fetch company offer
export function fetchCompanyOffer(pageNumber) {
    return async (dispatch, getState) => {
        try {
            dispatch(offerAction.setLoadingCompanyOffer());
            const { data } = await request.get(`/api/offer?companyId=${getState().auth.employee.companyID}&companyPageNumber=${pageNumber}&companyPageLimit=3`);
            dispatch(offerAction.setCompanyOffer(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching company offer";
            dispatch(offerAction.setErrorCompanyOffer(errorMessage));
            toast.error(errorMessage);
        }
    }
}

// create new offer
export function createNewOffer(newOffer,carId) {
    return async (dispatch , getState) => {
        try {
            dispatch(offerAction.setLoadingCreatingOffer());
            await request.post(`/api/offer/${carId}`,newOffer,{
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type": "application/json",
                }
            });
            dispatch(offerAction.setIsOfferCreated());
            toast.success("new offer created successfully!");
            setTimeout(()=> dispatch(offerAction.setClearOfferCreated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error creating new offer";
            toast.error(errorMessage);
            dispatch(offerAction.setClearOfferCreated());
        }
    }
}