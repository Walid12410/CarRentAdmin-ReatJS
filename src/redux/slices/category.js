import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
    loadingCreateCategory : false,
    isCategoryCreated : false,
    // update category
    isCategoryUpdated : false,
    loadingUpdateCategorty : false
  },
  reducers: { 
    setCategory: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //Create Category
    setLoadingCreateCategory : (state) => {
      state.loadingCreateCategory = true;
    },
    setIsCreatedCategory : (state) => {
      state.isCategoryCreated = true;
    },
    setClearCategoryCreated : (state) => {
      state.isCategoryCreated = false;
      state.loadingCreateCategory = false;
    },
    // update category
    setLoadingUpdatedCategory : (state) => {
      state.loadingUpdateCategorty = true;
    },
    setIsCategoryUpdated : (state) => {
      state.loadingUpdateCategorty = false;
      state.isCategoryUpdated = true;
    },
    setClearUpdateCategory : (state) => {
      state.loadingUpdateCategorty = false;
      state.isCategoryUpdated = false;
    }
  },
});

const categoryReducer = categorySlice.reducer;
const categoryAction = categorySlice.actions;

export { categoryAction, categoryReducer };
