import { toast } from "react-toastify";
import AdminSideBar from "../sideBar/SideBar";
import './company-form.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../../../redux/api/companyApiCall";
import { useNavigate } from "react-router-dom";

const CompanyForm = () => {

    const dispatch = useDispatch();
    const { loadingCreateCompany, isCompanyCreated } = useSelector(state => state.company);

    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyNumber, setCompanyNumber] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyState, setCompanyState] = useState("");

    const formSubmitHandler = (e) => {

        e.preventDefault();

        if (companyName.trim() === "") return toast.error("Company name is required");
        if (companyEmail.trim() === "") return toast.error("Company email is required");
        if (companyNumber.trim() === "") return toast.error("Company number is required");
        if (companyAddress.trim() === "") return toast.error("Company address is required");
        if (companyCity.trim() === "") return toast.error("Company city is required");
        if (companyState.trim() === "") return toast.error("Company state is required");


        const newCompany = {
            "companyName": companyName,
            "companyEmail": companyEmail,
            "companyPhoneNumber": companyNumber,
            "companyAddress": companyAddress,
            "companyCity": companyCity,
            "companyState": companyState
        };

        dispatch(createCompany(newCompany));

    }

    const navigate = useNavigate();

    useEffect(() => {
        if (isCompanyCreated) {
            navigate("/admin/company-table");
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
                    <p className="title-form">Company Address</p>
                    <input value={companyAddress}
                        onChange={(e) => setCompanyAddress(e.target.value)}
                        type="text" placeholder="Address" required className="input-field-company" />
                    <p className="title-form">Company City</p>
                    <input value={companyCity}
                        onChange={(e) => setCompanyCity(e.target.value)}
                        type="text" placeholder="City" required className="input-field-company" />
                    <p className="title-form">Company State</p>
                    <input value={companyState}
                        onChange={(e) => setCompanyState(e.target.value)}
                        type="text" placeholder="State" required className="input-field-company" />
                    <button type="submit" className="submit-btn">{loadingCreateCompany ? "loading.." : "Submit"}</button>
                </form>
            </div>
        </section>
    );
}

export default CompanyForm;