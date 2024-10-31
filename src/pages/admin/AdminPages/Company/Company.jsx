import React, { useEffect, useState } from 'react';
import AdminSideBar from "../../../../components/Admin-Components/sideBar/SideBar";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompany, fetchAllCompany } from "../../../../redux/api/companyApiCall";
import swal from 'sweetalert';
import Table from '../../../../components/table/Table';
import "../pages.css";


const Company = () => {

    const dispatch = useDispatch();
    const [deleteInitiated, setDeleteInitiated] = useState(false);

    const {
        loadingCompanies,
        errorCompanies,
        companies,
        loadingCompanyDeleted,
        isCompanyDeleted
    } = useSelector(state => state.company);

    // Column definitions
    const columns = [
        { columnName: "Company Name", dataField: "companyName" },
        { columnName: "Email", dataField: "companyEmail" },
        { columnName: "Phone Number", dataField: "companyPhoneNumber" },
        { columnName: "Created At", dataField: "createdAt" },
        { columnName: "Action", dataField: "action" },
    ];

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


    // Map companies data for table rows
    const rows = companies?.map(company => ({
        companyName: company?.companyName,
        companyEmail: company?.companyEmail,
        companyPhoneNumber: company?.companyPhoneNumber,
        createdAt: new Date(company?.createdAt).toDateString(),
        action: (
            <div className="table-button-group">
                <Link to={`/company/${company?._id}`} className="view-details-btn">Details</Link>
                <button className='update-btn'>Update</button>
                <button onClick={() => CompanyDelete(company?._id)} className='delete-btn'>Delete</button>
            </div>
        )
    }));


    return (
        <section className="page-container">
            <AdminSideBar />
            <div className="wrapper">
                <h1 className="page-title">Companies</h1>
                <Link className="new-form-button" to={`/admin/new-company`}>New Company</Link>
                {loadingCompanies ? (
                    <div className="loading-spinner"></div>
                ) : errorCompanies ? (
                    <div className="error-message">Error fetch company</div>
                ) : companies.length === 0 ? (
                    <div className="error-message">no company added yet</div>
                ) : (
                    <Table columns={columns} rows={rows} />
                )}
            </div>
        </section>
    );
}

export default Company;
