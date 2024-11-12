import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { countCompanyPromo, fetchCompanyPromo } from "../../../redux/api/promoApiCall";
import PromoCard from "../../../components/PromoCard";
import Pagination from "../../../components/Pagination";

const PromoPage = () => {

    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { companyPromoCount, companyPromo, loadingCompanyPromo, errorCompanyPromo } = useSelector(state => state.promo);

    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(companyPromoCount?.promoCount / 3);

    useEffect(() => {
        dispatch(fetchCompanyPromo(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countCompanyPromo());
    }, [dispatch]);


    return (
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? " " : " ml-64 "} w-full`}>
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="text-ms font-bold text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer	 m-2 text-center p-2">
                    New Promo
                </div>
                {loadingCompanyPromo ? (
                    <div className="loading-spinner"></div>
                ) : errorCompanyPromo ? (
                    <div className="error-message"></div>
                ) : companyPromo.length === 0 ? (
                    <div className="error-message">No promo added yet</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 m-2 justify-items-center">
                            {companyPromo?.map((promo) => (
                                <PromoCard promo={promo} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-auto">
                            <Pagination
                                pages={pages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default PromoPage;