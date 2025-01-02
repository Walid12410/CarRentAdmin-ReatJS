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
            dispatch(promoAction.setIsPromoCreated());
            toast.success("new promo created successfully!");
            setTimeout(()=> dispatch(promoAction.setClearPromoCreated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error create new promo";
            toast.error(errorMessage);
            dispatch(promoAction.setClearPromoCreated());
        }
    }
}

// delete promo
export function deletePromo(promoId) {
    return async (dispatch,getState) => {
        try {
            dispatch(promoAction.setLoadingPromoDeleted());
            await request.delete(`/api/promo/${promoId}`,{
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token
                }
            });
            dispatch(promoAction.setIsPromoDeleted());
            setTimeout(()=> dispatch(promoAction.setClearPromoDeleted()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error deleting promo";
            toast.error(errorMessage);
            dispatch(promoAction.setClearPromoDeleted());
        }
    }

}


// change promo image 
export function changePromoImage(promoId , image){
    return async (dispatch, getState) => {
        try {
            dispatch(promoAction.setLoadingPromoImage());
            await request.post(`/api/promo/upload-image/${promoId}` , image  ,{
                headers :{
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type" : "multipart/from-data"
                }
            });
            dispatch(promoAction.setPromoImageChanged());
            setTimeout(()=> dispatch(promoAction.setClearPromoImageChanged()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error changing promo image";
            toast.error(errorMessage);
            dispatch(promoAction.setClearPromoImageChanged());
        }
    }
}

// update promo
export function updatePromo(promoId , updatedPromoObject) {
    return async (dispatch, getState) => {
        try {
            dispatch(promoAction.setloadingPromoUpdated());
            await request.put(`/api/promo/${promoId}` , updatedPromoObject , {
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token
                }
            });
            dispatch(promoAction.setPromoUpdated());
            toast.success("promo updated successfully!");
            setTimeout(()=> dispatch(promoAction.setClearPromoUpdated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating promo";
            toast.error(errorMessage);
            dispatch(promoAction.setClearPromoUpdated());
        }
    }
}