import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import { fetchAllCompany } from "../../../redux/api/companyApiCall";
import { createEmployee } from "../../../redux/api/employeeApiCall";
import { useNavigate } from "react-router-dom";

const AddEmployeeAdmin = () => {

    const dispatch = useDispatch();
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const navigate = useNavigate();

    // Form State
    const [formData, setFormData] = useState({
        companyID: "",
        userName: "",
        email: "",
        password: "",
    });

    const { companies } = useSelector((state) => state.company); // Assuming `companies` are in the Redux store
    const { loadingCreateEmployee , isEmployeeCreated } = useSelector((state) => state.employee); // Assuming `companies` are in the Redux store

    useEffect(() => {
        dispatch(fetchAllCompany());
        window.scrollTo(0, 0);
    }, [dispatch]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(loadingCreateEmployee) return;
        // Dispatch an action to add the employee
        dispatch(createEmployee(formData));

        console.log("Employee Data Submitted: ", formData);
        // Reset the form
        setFormData({
            companyID: "",
            userName: "",
            email: "",
            password: "",
        });
    };

    useEffect(()=>{
        if(isEmployeeCreated){
            navigate("/admin/employee-page");
        }
    },[isEmployeeCreated]);

    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full h-screen flex flex-col`}>
                {/* Header */}
                <AdminHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />

                {/* Centered Employee Form */}
                <div className="flex justify-center items-center flex-grow bg-gray-100">
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                        <h1 className="text-xl font-bold mb-4 text-center">Add Employee</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Company ID Dropdown */}
                            <div>
                                <label htmlFor="companyID" className="block text-sm font-medium text-gray-700">
                                    Company
                                </label>
                                <select
                                    id="companyID"
                                    name="companyID"
                                    value={formData.companyID}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                >
                                    <option value="">Select a Company</option>
                                    {companies &&
                                        companies.map((company) => (
                                            <option key={company?._id} value={company?._id}>
                                                {company?.companyName}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* Username */}
                            <div>
                                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                   {loadingCreateEmployee ? "Adding...": "Add Employee"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeAdmin;
