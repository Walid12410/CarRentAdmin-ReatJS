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