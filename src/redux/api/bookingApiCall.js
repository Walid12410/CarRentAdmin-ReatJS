import { toast } from "react-toastify";
import { bookingAction } from "../slices/booking";
import request from "../../utils/requset";



// fetch company car booking
export function fetchCompanyBooking(pageNumber) {
    return async (dispatch, getState) => {
        try {
            dispatch(bookingAction.setLoadingCompanyBooking());
            const { data } = await request.get(`/api/booking/company/${getState().auth.employee.companyID}?pageNumber=${pageNumber}&limitPage=10`, {
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


// count company booking
export function countCompanyBooking() {
    return async (dispatch, getState) => {
        try {
            const { data } = await request.get(`/api/booking/company-count/${getState().auth.employee.companyID}`, {
                headers: {
                    Authorization: `Bearer ` + getState().auth.employee.token,
                }
            });
            dispatch(bookingAction.setCompanyBookingCount(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count booking";
            toast.error(errorMessage);
        }
    }
}


// update booking
export function updateBooking( id, updatedBooking) {
    return async (dispatch, getState) => {
        try {
            await request.put(`/api/booking/${id}`,updatedBooking,{
                headers : {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${getState().auth.employee.token}`
                }
            });
            toast.success("Booking updated successfully!");
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error updating booking";
            toast.error(errorMessage);
        }
    }
}