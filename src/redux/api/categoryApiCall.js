import request from "../../utils/requset";
import { toast } from "react-toastify";
import { categoryAction } from "../slices/category";

// Fetch all categories
export function fetchCategory() {
  return async (dispatch) => {
    try {
      // Dispatch loading state
      dispatch(categoryAction.setLoading());

      // Fetch category data
      const { data } = await request.get('/api/category');

      // Dispatch success (set categories)
      dispatch(categoryAction.setCategory(data));
    } catch (error) {
      // Dispatch error state
      const errorMessage = error.response?.data?.message || "Error fetching categories";
      dispatch(categoryAction.setError(errorMessage));

      // Show toast notification for error
      toast.error(errorMessage);
    }
  };
}
