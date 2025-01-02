import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCompany } from "../../../redux/api/companyApiCall";

const CompanyPage = () => {
    const dispatch = useDispatch();

    const { company, loadingOneCompany } = useSelector(state => state.company);
    const [sidebarToggle, setSidebarToggle] = useState(false);

    useEffect(() => {
        // Fetch company data when the component mounts
        dispatch(fetchOneCompany());
    }, [dispatch]);


    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <EmployeeSideBar sidebarToggle={sidebarToggle} />

            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col`}>
                {/* Header */}
                <EmployeeHeader setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />

                {loadingOneCompany ? (
                    <div className="loading-spinner">
                        loading...
                    </div>
                ) : company === null ? (
                    <div className="error-message"> Error fetching company data</div>
                ) : (
                    <div className="flex-grow flex flex-col p-4">
                        {/* Company Info */}
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">{company?.companyName}</h1>
                            <p className="text-lg">{company?.address}</p>
                            <p className="text-lg">{company?.city}, {company?.country}</p>
                        </div>

                        {/* Image Gallery */}
                        <div className="flex space-x-4 mt-4">
                            {Array.isArray(company?.imageCompany) && company?.imageCompany.length > 0 ? (
                                company.imageCompany.map((image, index) => (
                                    <div key={index} className="relative w-52 h-52">
                                        <img
                                            src={image.image.url}
                                            alt={`Company Image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        {image.isDefaultImage && (
                                            <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-full">
                                                Default Image
                                            </div>
                                        )}
                                        <button className="absolute top-2 right-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-full">
                                            Change Image
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No images available</p>
                            )}
                        </div>

                        {/* Company Details Form */}
                        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-semibold mb-4">Update Company Information</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="companyEmail"
                                        type="email"
                                        defaultValue={company?.companyEmail}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyPhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        id="companyPhoneNumber"
                                        type="number"
                                        defaultValue={company?.companyPhoneNumber}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input
                                        id="companyAddress"
                                        type="text"
                                        defaultValue={company?.address}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyCity" className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        id="companyCity"
                                        type="text"
                                        defaultValue={company?.city}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyCountry" className="block text-sm font-medium text-gray-700">Country</label>
                                    <input
                                        id="companyCountry"
                                        type="text"
                                        defaultValue={company?.country}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                                >
                                    Update Information
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyPage;
