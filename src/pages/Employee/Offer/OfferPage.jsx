import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination";
import { countCompanyOffers, fetchCompanyOffer } from "../../../redux/api/offerApiCall";
import OfferCard from "../../../components/OfferCard";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";

const OfferPage = () => {
    const dispatch = useDispatch();
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const { companyOffers, loadingCompanyOffer,
        errorCompanyOffers, companyOfferCount, isOfferDeleted
    } = useSelector(state => state.offer);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(companyOfferCount?.offerCount / 3);

    useEffect(() => {
        dispatch(fetchCompanyOffer(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countCompanyOffers());
    }, [dispatch]);

    useEffect(() => {
        if (isOfferDeleted) {
            dispatch(fetchCompanyOffer(currentPage));
            dispatch(countCompanyOffers());
            window.scrollTo(0, 0);
        }
    }, [isOfferDeleted]);

    return (
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? " " : " ml-64 "} w-full flex flex-col min-h-screen`}>
                {/* Header */}
                <EmployeeHeader
                    setSidebarToggle={setSidebarToggle}
                    sidebarToggle={sidebarToggle}
                />

                {/* Content */}
                <div className="flex-grow">
                    <Link
                        to="/employee/offer-page/new-offer"
                        className="text-sm font-bold text-white w-44 h-10 no-underline bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 ml-2 text-center flex items-center justify-center rounded">
                        New Offer
                    </Link>

                    {loadingCompanyOffer ? (
                        <div className="loading-spinner"></div>
                    ) : errorCompanyOffers ? (
                        <div className="error-message">Error fetching offers</div>
                    ) : companyOffers.length === 0 ? (
                        <div className="error-message">No offers added yet</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 justify-items-center">
                            {companyOffers.map((offer) => (
                                <OfferCard offer={offer} isAdmin={false} />
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

export default OfferPage;
