import {authAction} from "../slices/auth";
import request from "../../utils/requset";
import { toast } from "react-toastify";


//LogIn Admin
export function loginAdmin(user){
    return async (dispatch) => {
        try {
            const { data } = await request.post("/api/auth/register",user);
            console.log('data');
            dispatch(authAction.login(data));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
}