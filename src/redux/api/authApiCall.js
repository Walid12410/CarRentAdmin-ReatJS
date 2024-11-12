import { authAction } from "../slices/auth";
import request from "../../utils/requset";
import { toast } from "react-toastify";

// LogIn Admin
export function loginAdmin(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth/login", user);
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(authAction.login(data));
      dispatch(authAction.setSuccess(true)); 
    } catch (error) {
      dispatch(authAction.setSuccess(false));
      toast.error(error.response.data.message);
    }
  };
}

export function loginEmployee(user) {
  return async (dispatch) => {
    try {
      const { data } = await request.post("/api/auth-employee/login", user);
      localStorage.setItem("employeeInfo", JSON.stringify(data));
      dispatch(authAction.loginEmployee(data));
      dispatch(authAction.setSuccessEmplpoyee(true)); 
    } catch (error) {
      dispatch(authAction.setSuccessEmplpoyee(false));
      toast.error(error.response.data.message);
    }
  };
}
