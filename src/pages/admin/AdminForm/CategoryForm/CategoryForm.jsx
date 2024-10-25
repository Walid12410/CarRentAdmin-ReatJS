import { useDispatch, useSelector } from "react-redux";
import "./category-form.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createCategory, fetchCategory } from "../../../../redux/api/categoryApiCall";

const CategoryForm = ({ setAddCategoryForm }) => {
    const dispatch = useDispatch();

    const { loadingCreateCategory, isCategoryCreated } = useSelector(state => state.category);

    const [categoryName, setCategoryName] = useState("");

    const formSubmitHandler = (e) => {

        e.preventDefault();

        if (categoryName.trim() === "") return toast.error("Category name is required");

        const newCategoryName = {
            "categoryName": categoryName
        }

        dispatch(createCategory(newCategoryName));
    }

    useEffect(() => {
        if (isCategoryCreated) {
            dispatch(fetchCategory());
            setAddCategoryForm(false);
            toast.success("Category added successfully!");
        }
    }, [isCategoryCreated, dispatch, setAddCategoryForm]);


    return (
        <div className="category-form-div">
            <form onSubmit={formSubmitHandler} className="add-category-from">
                <abbr title="close">
                    <i className="add-category-form-close"
                        onClick={() => setAddCategoryForm(false)}>
                    </i>
                </abbr>
                <h1 className="add-category-title">Add new category</h1>
                <input type="text" placeholder="category name"
                    className="category-form-input"
                    onChange={(e) => setCategoryName(e.target.value)}
                    value={categoryName} />
                <button type="submit"
                    className="add-category-btn">{loadingCreateCategory ? "loading..." : "Add Category"}
                </button>
            </form>
        </div>
    );
}

export default CategoryForm;