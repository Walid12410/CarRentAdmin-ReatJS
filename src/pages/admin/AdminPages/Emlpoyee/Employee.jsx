import { useDispatch, useSelector } from 'react-redux';
import AdminSideBar from "../../../../components/sideBar/SideBar";
import React, { useEffect } from 'react';
import { fetchEmployee } from "../../../../redux/api/employeeApiCall";
import { Link } from "react-router-dom";
import "../pages.css";
import Table from '../../../../components/table/Table';


const Employee = () => {

    const dispatch = useDispatch();
    const { loadingEmployees, errorEmployees, employees } = useSelector(state => state.employee);

    // Column definitions
    const columns = [
        { columnName: "User Name", dataField: "userName" },
        { columnName: "Email", dataField: "email" },
        { columnName: "Company Name", dataField: "companyName" },
        { columnName: "Crated At", dataField: "createdAt" },
        { columnName: "Action", dataField: "action" },
    ];

    useEffect(() => {
        dispatch(fetchEmployee());
        window.scrollTo(0, 0);
    }, [dispatch]);


    // Map companies data for table rows
    const rows = employees?.map(employee => ({
        userName: employee?.userName,
        email: employee?.email,
        companyName: employee?.companyDetails[0]?.companyName,
        createdAt: new Date(employee?.createdAt).toDateString(),
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
                <h1 className="page-title">Employees</h1>
                <Link className="new-form-button" to={`/admin/new-employee`}>New Employee</Link>
                {loadingEmployees ? (
                    <div className="loading-spinner"></div>
                ) : errorEmployees ? (
                    <div className="error-message">Error fetch company</div>
                ): employees.length === 0 ? (
                    <div className="error-message">no employee added yet</div>
                ) : (
                    <Table columns={columns} rows={rows} />
                )}
            </div>
        </section>
    );
}

export default Employee;