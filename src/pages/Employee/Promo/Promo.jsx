import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { countCompanyPromo, fetchCompanyPromo } from "../../../redux/api/promoApiCall";
import PromoCard from "../../../components/PromoCard";
import Pagination from "../../../components/Pagination";
import { Link } from "react-router-dom";

const PromoPage = () => {
    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { companyPromoCount, companyPromo,
        loadingCompanyPromo, errorCompanyPromo,
        isPromoDeleted 
    } = useSelector(state => state.promo);

    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(companyPromoCount?.promoCount / 3);

    useEffect(() => {
        dispatch(fetchCompanyPromo(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countCompanyPromo());
    }, [dispatch]);

    useEffect(()=> {
        if(isPromoDeleted) {
            dispatch(fetchCompanyPromo(currentPage));
            dispatch(countCompanyPromo());
            window.scrollTo(0, 0);
        }
    },[isPromoDeleted]);

    return (
        <div className="flex">
            {/* Sidebar */}
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}>
                {/* Header */}
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />

                {/* Content */}
                <div className="flex-grow">
                    <Link
                        to={`/employee/promo-page/new-promo`}
                        className="text-sm font-bold no-underline text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 ml-2 text-center flex items-center justify-center rounded"
                    >
                        New Promo
                    </Link>

                    {loadingCompanyPromo ? (
                        <div className="loading-spinner"></div>
                    ) : errorCompanyPromo ? (
                        <div className="error-message"></div>
                    ) : companyPromo.length === 0 ? (
                        <div className="error-message">No promo added yet</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-2 justify-items-center">
                            {companyPromo?.map((promo) => (
                                <PromoCard promo={promo} key={promo.id} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-auto flex justify-center items-center py-4">
                    <Pagination
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PromoPage;
