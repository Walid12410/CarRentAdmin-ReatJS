import "./employee.css";
import { useDispatch, useSelector } from 'react-redux';
import AdminSideBar from "../../../../components/sideBar/SideBar";
import React, { useEffect } from 'react';
import { fetchEmployee } from "../../../../redux/api/employeeApiCall";



const EmployeeTable = () => {

    const dispatch = useDispatch();
    const { loadingEmployees, errorEmployees, employees } = useSelector(state => state.employee);

    useEffect(() => {
        dispatch(fetchEmployee());
        window.scrollTo(0, 0);
    }, [dispatch]);

    return (
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                <h1 className="table-title">Employees</h1>
                <button className="new-form-button">New Employee</button>
                {loadingEmployees ? (
                    <p>Loading...</p>
                ) : errorEmployees ? (
                    <p>Error fetch employees</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Company Name</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees?.map((employee) => (
                                <tr key={employee?._id}>
                                    <td>{employee?.userName}</td>
                                    <td>{employee?.email}</td>
                                    <td>{employee?.companyDetails[0]?.companyName}</td>
                                    <td>{new Date(employee?.createdAt).toDateString()}</td>
                                    <td>
                                        <div className="table-button-group">
                                            <button>Update</button>
                                            <button>Delete</button>
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

export default EmployeeTable