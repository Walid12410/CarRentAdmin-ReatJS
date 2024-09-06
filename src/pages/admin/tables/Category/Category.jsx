import React from 'react';
import AdminSideBar from "../../sideBar/SideBar";
import "./category.css";
import "../table.css";

const getRandomCategory = () => {
    const categories = ['Music', 'Sports', 'Technology', 'Fashion', 'Travel', 'Food', 'Health', 'Education'];
    return categories[Math.floor(Math.random() * categories.length)];
};

const generateRandomItems = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: getRandomCategory()
    }));
};

const CategoryTable = () => {
    // Generate 10 random items for testing
    const items = generateRandomItems(10);

    return (  
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                    <h1 className="table-title">Categories</h1>
                    <button className="new-form-button">New Category</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Category Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <b>{item.title}</b>
                                </td>
                                <td>
                                    <div className="table-button-group">
                                    <button>
                                        Update Category
                                    </button>
                                        <button>Delete Category</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
 
export default CategoryTable;
