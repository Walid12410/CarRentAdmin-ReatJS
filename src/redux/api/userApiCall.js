import { toast } from "react-toastify";
import request from "../../utils/requset";
import { userAction } from "../slices/user";


// Fetch user by page number
export function fetchUsers(pageNumber){
    return async (dispatch , getState) => {
        try {
            dispatch(userAction.setLoadingUsers());
            const {data} = await request.get(`/api/user/profile?pageNumber=${pageNumber}`,{
                headers : {
                    Authorization : "Bearer " + getState().auth.user.token
                }
            });
            dispatch(userAction.setUsers(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error fetching users"
            dispatch(userAction.setErrorUsers(errorMessage));
            toast.error(errorMessage);
        }
    }
}


// Get total user
export function countUser(){
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/user/count`);
            dispatch(userAction.setUserCount(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error count users"
            toast.error(errorMessage);
        }
    }
}