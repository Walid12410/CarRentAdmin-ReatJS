import React from 'react';
import AdminSideBar from "../../sideBar/SideBar";
import './company.css';


const CompaniesTable = () => {

    // Test data for companies
    const companies = [
        {
            _id: '1',
            companyName: 'Tech Solutions',
            companyEmail: 'info@techsolutions.com',
            companyPhoneNumber: '123-456-7890',
            companyAddress: '123 Tech Avenue',
            companyCity: 'San Francisco',
            companyState: 'CA',
            createdAt: '2021-10-05',
            imageCompany: 'https://via.placeholder.com/40', // Placeholder image URL
        },
        {
            _id: '2',
            companyName: 'Design Hub',
            companyEmail: 'contact@designhub.com',
            companyPhoneNumber: '987-654-3210',
            companyAddress: '456 Creative Road',
            companyCity: 'Los Angeles',
            companyState: 'CA',
            createdAt: '2022-03-15',
            imageCompany: 'https://via.placeholder.com/40',
        },
        // Add more test data as needed...
    ];

    return (  
        <section className="table-container">
            <AdminSideBar />
            <div className="table-wrapper">
                <h1 className="table-title">Companies</h1>
                <button className="new-form-button">New Company</button>
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
                            <th>Image</th>
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
                                <td>{company?.createdAt}</td>
                                <td>
                                    <img
                                        src={company?.imageCompany}
                                        alt={company?.companyName}
                                        className="table-company-image"
                                    />
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
            </div>
        </section>
    );
}
 
export default CompaniesTable;
