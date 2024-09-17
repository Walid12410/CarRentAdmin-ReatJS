import React, { useEffect } from 'react';
import AdminSideBar from "../../sideBar/SideBar";
import './company.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCompany } from "../../../../redux/api/companyApiCall";


const CompaniesTable = () => {

    const dispatch = useDispatch();
    const { loadingCompanies, errorCompanies, companies } = useSelector(state => state.company)

    useEffect(() => {
        dispatch(fetchAllCompany());
        window.scrollTo(0, 0);
    }, [dispatch]);


    return (
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                <h1 className="table-title">Companies</h1>
                <button className="new-form-button">New Company</button>
                {loadingCompanies ? (
                    <p>Loading...</p>
                ) : errorCompanies ? (
                    <p>Error fetch companies</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Created At</th>
                                <th>View Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies?.map((company, index) => (
                                <tr key={company?._id}>
                                    <td>{company?.companyName}</td>
                                    <td>{company?.companyEmail}</td>
                                    <td>{company?.companyPhoneNumber}</td>
                                    <td>{company?.companyAddress}</td>
                                    <td>{company?.companyCity}</td>
                                    <td>{company?.companyState}</td>
                                    <td>{new Date(company?.createdAt).toDateString()}</td>
                                    <td>
                                        <Link to={`comapny/${companies?._id}`} className="view-details-btn">
                                            View Details
                                        </Link>
                                    </td>
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

export default CompaniesTable;
