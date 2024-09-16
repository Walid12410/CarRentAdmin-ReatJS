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
