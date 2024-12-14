import request from "../../utils/requset";
import { toast } from "react-toastify";
import { promoAction } from "../slices/promo";


// fetch company promo
export function fetchCompanyPromo(pageNumber) {
    return async (dispatch, getState) => {
        try {
            dispatch(promoAction.setLoadingCompanyPromo());
            const { data } = await request.get(`/api/promo?companyPageNumber=${pageNumber}&companyLimitPage=3&companyId=${getState().auth.employee.companyID}`);
            dispatch(promoAction.setCompanyPromo(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching company promo";
            dispatch(promoAction.setErrorCompanyPromo(errorMessage));
            toast.error(errorMessage);
        }
    }
}

// count company promo
export function countCompanyPromo() {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.get(`/api/promo/count?companyId=${getState().auth.employee.companyID}`);
            dispatch(promoAction.setCompanyPromoCount(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count promo"
            toast.error(errorMessage);
        }
    }
}

// create new promo
export function createNewPromo(newPromo) {
    return async (dispatch , getState) => {
        try {
            dispatch(promoAction.setLoadingPromoCreating());
            await request.post(`/api/promo` , newPromo, {
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type" : "multipart/from-data"
                }
            });
            dispatch(promoAction.setIsPromoCreated);
            toast.success("new promo created successfully!");
            setTimeout(()=> dispatch(promoAction.setClearPromoCreated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error create new promo";
            toast.error(errorMessage);
            dispatch(promoAction.setClearPromoCreated());
        }
    }
}