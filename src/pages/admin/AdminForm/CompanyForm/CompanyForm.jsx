import { toast } from "react-toastify";
import AdminSideBar from "../../../../components/sideBar/SideBar";
import '../form.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../../../../redux/api/companyApiCall";
import { useNavigate } from "react-router-dom";

const CompanyForm = () => {

    const dispatch = useDispatch();
    const { loadingCreateCompany, isCompanyCreated } = useSelector(state => state.company);

    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyNumber, setCompanyNumber] = useState("");

    const formSubmitHandler = (e) => {

        e.preventDefault();

        if (companyName.trim() === "") return toast.error("Company name is required");
        if (companyEmail.trim() === "") return toast.error("Company email is required");
        if (companyNumber.trim() === "") return toast.error("Company number is required");


        const newCompany = {
            "companyName": companyName,
            "companyEmail": companyEmail,
            "companyPhoneNumber": companyNumber,
        };

        dispatch(createCompany(newCompany));

    }

    const navigate = useNavigate();

    useEffect(() => {
        if (isCompanyCreated) {
            navigate("/admin/company");
        }
    }, [isCompanyCreated, navigate]);



    return (
        <section className="form-container">
            <AdminSideBar />
            <div className="wrapper">
                <h1 className="table-title">Add New Company</h1>
                <form onSubmit={formSubmitHandler} className="form-table">
                    <p className="title-form">Company Name</p>
                    <input
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        type="text" placeholder="Name" required className="input-field-company" />
                    <p className="title-form">Company Email</p>
                    <input value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                        type="email" placeholder="Email" required className="input-field-company" />
                    <p className="title-form">Company Phone Number</p>
                    <input value={companyNumber}
                        onChange={(e) => setCompanyNumber(e.target.value)}
                        type="number" placeholder="Phone Number" required className="input-field-company" />
                    <button type="submit" className="submit-btn">{loadingCreateCompany ? "loading..." : "Create new company"}</button>
                </form>
            </div>
        </section>
    );
}

export default CompanyForm;