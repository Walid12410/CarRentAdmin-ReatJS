import request from "../../utils/requset";
import { toast } from "react-toastify";
import { offerAction } from "../slices/offer";


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


// update offer
export function updateOffer(offerId,updateOffer) {
    return async (dispatch,getState) => {
        try {
            dispatch(offerAction.setLoadingUpdateOffer());
            await request.put(`/api/offer/${offerId}`,updateOffer,{
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type": "application/json",
                }
            });
            dispatch(offerAction.setIsOfferUpdated());
            toast.success("offer updated successfully!");
            setTimeout(()=> dispatch(offerAction.setClearOfferUpdated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating offer";
            toast.error(errorMessage);
            dispatch(offerAction.setClearOfferUpdated());
        }
    }
}


// delete offer
export function deleteOffer(offerId) {
    return async (dispatch, getState) =>{
        try {
            dispatch(offerAction.setLoadingDeleteOffer());
            await request.delete(`/api/offer/${offerId}`,{
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                }
            });
            dispatch(offerAction.setIsOfferDeleted());
            toast.success("offer deleted successfully");
            setTimeout(()=> dispatch(offerAction.setClearOfferDeleted()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error deleting offer";
            toast.error(errorMessage);
            dispatch(offerAction.setClearOfferDeleted());
        }
    }
}


// count offers
export function countOffers() {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/offer/count`);
            dispatch(offerAction.setCountOffers(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count offers";
            toast.error(errorMessage);
        }
    }
}


// get all offers
export function fetchAllOffers(pageNumber) {
    return async (dispatch) => {
        try {
            const currentTime = new Date().toISOString().slice(0, 19);
            dispatch(offerAction.setLoadingOffers());
            const { data } = await request.get(`/api/offer?currentTime=${currentTime}&page=${pageNumber}&limit=6`);
            dispatch(offerAction.setOffers(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count offers";
            toast.error(errorMessage);
            dispatch(offerAction.setErrorOffers(errorMessage));
        }
    }
}