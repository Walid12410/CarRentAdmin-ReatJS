import request from "../../utils/requset";
import { toast } from "react-toastify";
import { employeeAction } from "../slices/employee";


// fetch employee data
export function fetchEmployee(){
    return async(dispatch, getState) => {
        try {
            dispatch(employeeAction.setLoadingEmployees());
            const {data} = await request.get(`/api/employee`,{
                headers : {
                    Authorization : "Bearer " + getState().auth.user.token,
                    "Content-Type" : "multipart/form-data"
                }
            });
            dispatch(employeeAction.setEmployees(data));
        } catch (error) {
            const errorMessage  = error.response?.data?.message || "Error fetching employees";
            dispatch(employeeAction.setErrorEmployees(errorMessage));
            toast.error(errorMessage);
        }
    }
}


// Create new employee
export function createEmployee(newEmployee) {
    return async (dispatch , getState) => {
        try {
            dispatch(employeeAction.setLoadingEmpolyeeCreated());
            await request.post(`/api/auth-employee/register`,newEmployee , {
                headers :{
                    Authorization : "Bearer " + getState().auth.user.token,
                    "Content-Type" : "application/json"
                }
            });
            dispatch(employeeAction.setIsEmoloyeeCreated());
            setTimeout(()=> dispatch(employeeAction.setClearEmployeeCreated()));
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error create Employee";
            toast.error(errorMessage);
            dispatch(employeeAction.setClearEmployeeCreated())
        }
    }
}