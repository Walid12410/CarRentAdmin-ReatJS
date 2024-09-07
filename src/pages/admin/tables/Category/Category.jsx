import React, { useEffect } from 'react';
import AdminSideBar from "../../sideBar/SideBar";
import "./category.css";
import "../table.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from "../../../../redux/api/categoryApiCall";


const CategoryTable = () => {

    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(state => state.category);

    useEffect(()=>{
        dispatch(fetchCategory());
        window.scrollTo(0, 0);
    }, [dispatch]);

    return (  
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                <h1 className="table-title">Categories</h1>
                <button className="new-form-button">New Category</button>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fetching categories</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Count</th>
                                <th>Category Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((category , index) => (
                                <tr key={category?._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <b>{category?.categoryName}</b>
                                    </td>
                                    <td>
                                        <div className="table-button-group">
                                            <button>Update Category</button>
                                            <button>Delete Category</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
}
 
export default CategoryTable;
