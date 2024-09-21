import React, { useEffect, useState } from 'react';
import AdminSideBar from "../../sideBar/SideBar";
import './company.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompany, fetchAllCompany } from "../../../../redux/api/companyApiCall";
import swal from 'sweetalert';

const CompaniesTable = () => {

    const dispatch = useDispatch();
    const [deleteInitiated, setDeleteInitiated] = useState(false);

    const { 
        loadingCompanies,
        errorCompanies,
        companies,
        loadingCompanyDeleted,
        isCompanyDeleted
    } = useSelector(state => state.company);

    // Delete Company
    const CompanyDelete = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, this company and its related cars will be permanently deleted.",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            setDeleteInitiated(true); 
            dispatch(deleteCompany(id)); 
            swal({
              title: "Deleting Company...",
              icon: "info",
              buttons: false,
            });
          } else {
            swal("Company deletion canceled!");
          }
        });
    };

    useEffect(() => {
        if (deleteInitiated && !loadingCompanyDeleted) {
            if (isCompanyDeleted) {
                swal("Company has been deleted successfully!", {
                    icon: "success",
                });
                dispatch(fetchAllCompany()); 
            } else {
                swal("Failed to delete the company!", {
                    icon: "error",
                });
            }
            setDeleteInitiated(false); 
        }
    }, [deleteInitiated, loadingCompanyDeleted, isCompanyDeleted, dispatch]);

    useEffect(() => {
        dispatch(fetchAllCompany());
        window.scrollTo(0, 0);
    }, [dispatch]);

    return (
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                <h1 className="table-title">Companies</h1>
                <Link className="new-form-button" to={`/admin/new-company`}>New Company</Link>
                {loadingCompanies ? (
                    <p>Loading...</p>
                ) : errorCompanies ? (
                    <p>Error fetching companies</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies?.map((company) => (
                                <tr key={company?._id}>
                                    <td>{company?.companyName}</td>
                                    <td>{company?.companyEmail}</td>
                                    <td>{company?.companyPhoneNumber}</td>
                                    <td>{new Date(company?.createdAt).toDateString()}</td>
                                    <td>
                                        <div className="table-button-group">
                                            <Link to={`/company/${company?._id}`} className="view-details-btn">
                                                View Details
                                            </Link>
                                            <button>Update</button>
                                            <button onClick={() => CompanyDelete(company?._id)}>Delete</button> 
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
