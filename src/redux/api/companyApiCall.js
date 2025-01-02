import { toast } from "react-toastify";
import request from "../../utils/requset";
import { companyAction } from "../slices/company";


// fetch all companies
export function fetchAllCompany(){
    return async (dispatch) => {
        try {
            dispatch(companyAction.setloadingCompanies());
            const { data } = await request.get('/api/company/list');
            dispatch(companyAction.setComapnies(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching Companies"
            dispatch(companyAction.setErrorCompanies(errorMessage));
            toast.error(errorMessage);
        }
    }
}


// Create new company
export function createCompany(newCompany) {
    return async (dispatch , getState) => {
        try {
            dispatch(companyAction.setLoadingCreateCompany());
             await request.post(`/api/company/list`, newCompany , {
                headers : {
                    Authorization : "Bearer " + getState().auth.user.token,
                    "Content-Type": "application/json"
                }
            });
            dispatch(companyAction.setCompanyCreated());
            setTimeout(()=> dispatch(companyAction.setClearCompanyCreated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error create new company";
            toast.error(errorMessage);
            dispatch(companyAction.setClearLoading());
        }
    }
}


// Delete company
export function deleteCompany(id) {
    return async(dispatch, getState) => {
        try {
            dispatch(companyAction.setLoadingCompanyDeleted());
            await request.delete(`/api/company/list/${id}`,{
                headers : {
                    Authorization : "Bearer " + getState().auth.user.token
                }
            });
            dispatch(companyAction.setIsCompanyDeleted());
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(companyAction.setErorrCompanyDeleted());
        }
    }
}

// Get company by id
export function fetchOneCompany() {
    return async(dispatch , getState) => {
        try {
            dispatch(companyAction.setLoadingCompany());
            const { data } = await request.get(`/api/company/list/${getState().auth.employee.companyID}`);
            dispatch(companyAction.setCompany(data));
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch(companyAction.setErrorCompany());
        }
    }
}

// update company 
export function updateCompany(updatedCompany) {
    return async(dispatch , getState) => {
        try {
            dispatch(companyAction.setLoadingCompanyUpdated());
            await request.put(`/api/company/list/${getState().auth.employee.companyID}`, updatedCompany , {
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type": "application/json"
                }
            });
            dispatch(companyAction.setCompanyUpdated());
            setTimeout(()=> dispatch(companyAction.setClearCompanyUpdated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating company";
            toast.error(errorMessage);
            dispatch(companyAction.setClearCompanyUpdated());
        }
    }
}


// change company image
export function changeCompanyImage(imageId,image) {
    return async (dispatch , getState) => {
        try {
            dispatch(companyAction.setLoadingCompanyImage());
            await request.post(`/api/company/change-image/${imageId}`, image , {
                headers : {
                    Authorization : "Bearer " + getState().auth.employee.token,
                    "Content-Type": "multipart/form-data"
                }
            });
            dispatch(companyAction.setIsCompanyImageUpdated());
            setTimeout(()=> dispatch(companyAction.setClearCompangImageChange()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating company image";
            toast.error(errorMessage);
            dispatch(companyAction.setClearCompangImageChange());
        }
    }
}