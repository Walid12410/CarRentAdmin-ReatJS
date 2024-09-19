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
            console.log(newCompany);
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
            toast.error(error.response.data.message);
            dispatch(companyAction.setClearLoading());
        }
    }
}