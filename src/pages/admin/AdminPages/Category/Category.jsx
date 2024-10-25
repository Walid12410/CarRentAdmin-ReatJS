import React, { useEffect, useState } from 'react';
import AdminSideBar from "../../../../components/sideBar/SideBar";
import "../pages.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from "../../../../redux/api/categoryApiCall";
import Table from '../../../../components/table/Table';
import CategoryForm from '../../AdminForm/CategoryForm/CategoryForm';


const Category = () => {
    const dispatch = useDispatch();

    const { categories, loading, error } = useSelector(state => state.category);
    const [addCategory, setAddCategoryForm] = useState(false);

    // Column definitions
    const columns = [
        { columnName: "Count", dataField: "countCat" },
        { columnName: "Category Title", dataField: "categoryName" },
        { columnName: "Action", dataField: "action" },
    ];

    useEffect(() => {
        dispatch(fetchCategory());
        window.scrollTo(0, 0);
    }, [dispatch]);

    // Map companies data for table rows
    const rows = categories?.map((category, index) => ({
        countCat: index + 1,
        categoryName: category?.categoryName,
        action: (
            <div className="table-button-group">
                <button className='update-btn'>Update</button>
                <button className='delete-btn'>Delete</button>
            </div>
        )
    }));

    return (
        <section className="page-container">
            <AdminSideBar />
            <div className="wrapper">
                <h1 className="page-title">Category</h1>
                <button className="new-form-button"
                    onClick={() => setAddCategoryForm(true)}>New Category</button>
                {loading ? (
                    <div className="loading-spinner"></div>
                ) : error ? (
                    <div className="error-message">Error fetch users</div>
                ) : categories.length === 0 ? (
                    <div className="error-message">no category added yet</div>
                ) : (
                    <Table columns={columns} rows={rows} />
                )}
            </div>
            {addCategory && <CategoryForm setAddCategoryForm={setAddCategoryForm} />}
        </section>
    );
}

export default Category;
