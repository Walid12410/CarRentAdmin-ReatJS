import request from "../../utils/requset";
import { toast } from "react-toastify";
import { reviewAction } from "../slices/review";

// fetch company review car
export function fetchCompanyReview(pageNumber){
    return async (dispatch , getState) => {
        try {
            dispatch(reviewAction.setLoadingCompanyReview());
            const { data } = await request.get(`/api/review/company-review/${getState().auth.employee.companyID}?pageNumber=${pageNumber}&limitPage=6`,{
                headers : {
                    'Authorization' : "Bearer " + getState().auth.employee.token
                }
            });
            dispatch(reviewAction.setComapnyReview(data));
        } catch (error) {
            const errorMessage = error.response?.data.message || "Error fetch review";
            toast.error(errorMessage);
            dispatch(reviewAction.setErrorCompanyReview(errorMessage));
        }
    }
}


//fetch company review count
export function fetchCompanyReviewCount() {
    return async (dispatch,getState) => {
        try {
            const { data } = await request.get(`/api/review/company-review/count/${getState().auth.employee.companyID}`,{
                headers : {
                    'Authorization' : "Bearer " + getState().auth.employee.token
                }
            });
            dispatch(reviewAction.setCompanyReviewCount(data));
        } catch (error) {
            const errorMessage = error.response?.data.message || "Error fetch review count";
            toast.error(errorMessage);
        }
    }
}


//fetch review count
export function fetchReviewCount() {
    return async (dispatch,getState) => {
        try {
            const { data } = await request.get(`/api/review/car-review/count`,{
                headers : {
                    'Authorization' : "Bearer " + getState().auth.user.token
                }
            });
            dispatch(reviewAction.setCountReview(data));
        } catch (error) {
            const errorMessage = error.response?.data.message || "Error fetch review count";
            toast.error(errorMessage);
        }
    }
}


// fetch review
export function fetchReview(pageNumber){
    return async (dispatch , getState) => {
        try {
            dispatch(reviewAction.setLoadingReview());
            const { data } = await request.get(`/api/review/car-review?pageNumber=${pageNumber}&limitPage=6`,{
                headers : {
                    'Authorization' : "Bearer " + getState().auth.user.token
                }
            });
            dispatch(reviewAction.setReviews(data));
        } catch (error) {
            const errorMessage = error.response?.data.message || "Error fetch review";
            toast.error(errorMessage);
            dispatch(reviewAction.setErrorReview(errorMessage));
        }
    }
}