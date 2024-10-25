import request from "../../utils/requset";
import { toast } from "react-toastify";
import { categoryAction } from "../slices/category";

// Fetch all categories
export function fetchCategory() {
  return async (dispatch) => {
    try {
      dispatch(categoryAction.setLoading());
      const { data } = await request.get('/api/category');
      dispatch(categoryAction.setCategory(data));
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error fetching categories";
      dispatch(categoryAction.setError(errorMessage));
      toast.error(errorMessage);
    }
  };
}


// create category
export function createCategory(categoryName) {
  return async (dispatch , getState) => {
    try {
      dispatch(categoryAction.setLoadingCreateCategory());
      await request.post(`/api/category`, categoryName , {
        headers : {
          Authorization : "Bearer " + getState().auth.user.token,
          "Content-Type" : "application/json"
        }
      });
      dispatch(categoryAction.setIsCreatedCategory());
      setTimeout(()=> dispatch(categoryAction.setClearCategoryCreated()));
    } catch (error) {
      const erroMessage = error.response?.data?.message || "Error create category";
      toast.error(erroMessage);
      dispatch(categoryAction.setClearCategoryCreated());
    }
  }
}
