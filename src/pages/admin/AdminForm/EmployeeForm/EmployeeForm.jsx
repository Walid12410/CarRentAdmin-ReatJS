import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../../../components/Admin-Components/sideBar/SideBar";
import "../form.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../../../redux/api/employeeApiCall";
import { toast } from "react-toastify";
import { fetchAllCompany } from "../../../../redux/api/companyApiCall";


const EmployeeForm = () => {
    const dispatch = useDispatch();
    
    const { loadingCreateEmployee, isEmployeeCreated } = useSelector(state => state.employee);
    const { companies, loadingCompanies, errorCompanies } = useSelector(state => state.company);



    const [employeeFullName, setEmployeeFullName] = useState("");
    const [companyId, setCompanyId] = useState(null);
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");

    const formSubmitHandler = (e) => {

        e.preventDefault();

        if (employeeFullName.trim() === "") return toast.error("employee full name is required");
        if (companyId === null) return toast.error("companyId is required");
        if (employeeEmail.trim() === "") return toast.error("employee email is required");
        if (employeePassword.trim() === "") return toast.error("employee Password is required");


        const newEmployee = {
            "companyID": companyId,
            "userName": employeeFullName,
            "email": employeeEmail,
            "password": employeePassword,
        };

        dispatch(createEmployee(newEmployee));

    }

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllCompany());
    }, [dispatch]);


    useEffect(() => {
        if (isEmployeeCreated) {
            navigate("/admin/employee-table");
        }
    }, [isEmployeeCreated, navigate]);



    return (
        <section className="form-container">
            <AdminSideBar />
            <div className="wrapper">
                <h1 className="table-title">Add New Employee</h1>
                <form onSubmit={formSubmitHandler} className="form-table">
                    <p className="title-form">Employee Email</p>
                    <input
                        value={employeeEmail}
                        onChange={(e) => setEmployeeEmail(e.target.value)}
                        type="email" placeholder="Email" required className="input-field-company" />
                    <p className="title-form">Employee Full Name</p>
                    <input value={employeeFullName}
                        onChange={(e) => setEmployeeFullName(e.target.value)}
                        type="text" placeholder="full name" required className="input-field-company" />
                    <p className="title-form">Employee Password</p>
                    <input value={employeePassword}
                        onChange={(e) => setEmployeePassword(e.target.value)}
                        type="password" placeholder="password" required className="input-field-company" />
                    <p className="title-form">Company name</p>
                    <select className="input-field-company" value={companyId}
                     onChange={(e) => setCompanyId(e.target.value)}>
                        <option value="">Select Company</option>
                        {loadingCompanies ? (
                            <p>Loading...</p>
                        ) : errorCompanies ? (
                            <p>Error fetching companies</p>
                        ) : companies && companies.length > 0 ? (
                            companies.map((company) => (
                                <option key={company?._id} value={company?._id}>
                                    {company?.companyName}
                                </option>
                            ))
                        ) : (
                            <option value="">Please add a company before adding an employee</option>
                        )}
                    </select>
                    <button type="submit" className="submit-btn">{loadingCreateEmployee ? "loading..." : "Create new employee"}</button>
                </form>
            </div>
        </section>
    );
}

export default EmployeeForm;