import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, createCategory } from "../../../redux/api/categoryApiCall";
import { useState, useEffect } from "react";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import CategoryTable from "../../../components/CategoryTable";

const CategoryAdmin = () => {
    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false); // State to toggle dialog
    const [categoryName, setCategoryName] = useState(""); // State for category name
    const { categories, loading, error, loadingCreateCategory, isCategoryCreated } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchCategory());
        window.scrollTo(0, 0);
    }, [dispatch]);

    const handleOpenDialog = () => {
        setCategoryName(""); // Reset input field
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSubmit = () => {
        if (loadingCreateCategory) return;

        if (categoryName.trim() === "") return; // Prevent empty submissions
        dispatch(createCategory({ categoryName: categoryName })).then(() => {
            if (isCategoryCreated) {
                dispatch(fetchCategory()); // Refresh categories after adding
                setDialogOpen(false); // Close dialog    
            } else {
                setDialogOpen(false); // Close dialog    
            }
        });
    };

    useEffect(() => {
        if (isCategoryCreated) {
            dispatch(fetchCategory()); // Refresh categories after adding
        }
    }, [isCategoryCreated]);

    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div
                className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}
            >
                {/* Header */}
                <AdminHeader
                    setSidebarToggle={setSidebarToggle}
                    sidebarToggle={sidebarToggle}
                />

                <div className="flex-grow flex flex-col p-4">
                    {/* New Category Button */}
                    <button
                        onClick={handleOpenDialog} // Open the dialog
                        className="text-sm font-bold no-underline text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 ml-2 text-center flex items-center justify-center rounded"
                    >
                        New Category
                    </button>

                    {/* Category List */}
                    <div className="mt-4">
                        {loading ? (
                            <div className="loading-spinner"></div>
                        ) : error ? (
                            <div className="error-message">Error fetching categories</div>
                        ) : categories && categories.length > 0 ? (
                            <CategoryTable categories={categories} />
                        ) : (
                            <div className="error-message">No categories added yet</div>
                        )}
                    </div>
                </div>
            </div>

            {/* New Category Dialog */}
            {dialogOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-96 p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Add New Category</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="categoryName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Category Name
                                </label>
                                <input
                                    id="categoryName"
                                    type="text"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    required
                                    className="mt-1 block w-full p-2 border rounded-md"
                                    placeholder="Enter category name"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={handleCloseDialog}
                                    className="px-4 py-2 bg-gray-500 text-white rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    {loadingCreateCategory ? "Adding..." : "Add new category"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryAdmin;
