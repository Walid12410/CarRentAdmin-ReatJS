import { toast } from "react-toastify";
import { bookingAction } from "../slices/booking";
import request from "../../utils/requset";

// fetch company car booking
export function fetchCompanyBooking () {
    return async (dispatch,getState) => {
        try {
            dispatch(bookingAction.setLoadingCompanyBooking());
            const { data } = await request.get(`/api/booking/company/${getState().auth.employee.companyID}`,{
                headers: {
                    Authorization: `Bearer ` + getState().auth.employee.token,
                }
            });
            dispatch(bookingAction.setCompanyBooking(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching company booking"
            toast.error(errorMessage);
        }
    }
}