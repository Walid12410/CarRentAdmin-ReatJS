import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import { fetchEmployee } from "../../../redux/api/employeeApiCall";
import { Link } from "react-router-dom";

const EmployeeAdmin = () => {
    const dispatch = useDispatch();
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { employees, loadingEmployees, errorEmployees } = useSelector(state => state.employee);

    useEffect(() => {
        dispatch(fetchEmployee());
    }, [dispatch]);

    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : " ml-64 "} w-full flex flex-col`}>
                {/* Header */}
                <AdminHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="flex-grow flex flex-col">
                    <Link
                        to={`/admin/employee-page/create`}
                        className="text-sm font-bold no-underline text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 ml-2 text-center flex items-center justify-center rounded"
                    >
                        New employee
                    </Link>

                    {/* Employee Table */}
                    {loadingEmployees ? (
                        <div className="loading-spinner">Loading...</div>
                    ) : errorEmployees ? (
                        <div className="error-message">Error fetching employees</div>
                    ) : employees.length === 0 ? (
                        <div className="error-message">No employees added yet!</div>
                    ) : (
                        <div className="overflow-x-auto p-4">
                            <table className="table-auto w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2">Username</th>
                                        <th className="border border-gray-300 px-4 py-2">Email</th>
                                        <th className="border border-gray-300 px-4 py-2">Company Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee?._id} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-4 py-2">{employee?.userName}</td>
                                            <td className="border border-gray-300 px-4 py-2">{employee?.email}</td>
                                            <td className="border border-gray-300 px-4 py-2">{employee.companyDetails[0]?.companyName}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployeeAdmin;
