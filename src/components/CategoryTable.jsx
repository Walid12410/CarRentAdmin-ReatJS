import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing the icons

const CategoryTable = ({ categories }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleEdit = (category) => {
        setSelectedCategory(category); // Set the selected category
        setIsDialogOpen(true); // Open the dialog
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false); // Close the dialog
        setSelectedCategory(null); // Reset the selected category
    };

    const handleSaveChanges = () => {
        // Add logic to save changes (e.g., API call)
        console.log("Updated category:", selectedCategory);

        // Close the dialog after saving changes
        setIsDialogOpen(false);
    };

    return (
        <div className="mt-4">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">Category Name</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id} className="border-t">
                            <td className="px-4 py-2">{category?.categoryName}</td>
                            <td className="px-4 py-2 flex items-center space-x-4">
                                <button
                                    onClick={() => handleEdit(category)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <FaEdit size={20} />
                                </button>
                                <button
                                    onClick={() => console.log("Delete category", category?._id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FaTrashAlt size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-bold mb-4">Edit Category</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                                    Category Name
                                </label>
                                <input
                                    id="categoryName"
                                    type="text"
                                    value={selectedCategory?.categoryName || ""}
                                    onChange={(e) =>
                                        setSelectedCategory((prev) => ({
                                            ...prev,
                                            categoryName: e.target.value,
                                        }))
                                    }
                                    className="mt-1 block w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={handleCloseDialog}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSaveChanges}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryTable;
