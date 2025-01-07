import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import { useEffect, useState } from "react";
import CompanyCard from "../../../components/CompanyCard";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import { fetchAllCompany } from "../../../redux/api/companyApiCall";
import { Link } from "react-router-dom";


const CompanyAdmin = () => {

    const dispatch = useDispatch();
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { companies, loadingCompanies, errorCompanies } = useSelector(state => state.company);

    useEffect(() => {
        dispatch(fetchAllCompany());
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}>

                {/* Header */}
                <AdminHeader setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />
                <div className="flex-grow flex flex-col">
                    <Link
                        to={"/admin/company-page/create"}
                        className="text-sm font-bold no-underline text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 ml-2 text-center flex items-center justify-center rounded"
                    >
                        New Company
                    </Link>

                 {/* Company Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {loadingCompanies ? (
                        <div className="loading-spinner">
                        </div>
                    ) : errorCompanies ? (
                        <div className="error-message">Error fetching companies</div>
                    ) : companies && companies.length > 0 ? (
                        companies.map((company) => (
                            <CompanyCard key={company?._id} company={company} />
                        ))
                    ) : (
                        <p>No companies available</p>
                    )}
                </div>

</div>

            </div>
        </div>
    );
}

export default CompanyAdmin;