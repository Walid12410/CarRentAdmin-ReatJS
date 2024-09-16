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