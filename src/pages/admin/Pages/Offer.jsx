import { useEffect, useState } from "react";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import Pagination from "../../../components/Pagination";
import { countOffers, fetchAllOffers } from "../../../redux/api/offerApiCall";
import { useDispatch, useSelector } from "react-redux";
import OfferCard from "../../../components/OfferCard";

const OfferAdmin = () => {


    const dispatch = useDispatch();


    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { offersCount, errorOffers, loadingOffers, offers } = useSelector(state => state.offer);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(offersCount?.countDocuments / 6);

    useEffect(() => {
        dispatch(fetchAllOffers(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countOffers());
    }, [dispatch]);


    return (
        <div className="flex min-h-screen">
            <AdminSideBar sidebarToggle={sidebarToggle} />

            <div className={`${sidebarToggle ? " " : " ml-64 "} w-full flex flex-col`}>

                {/* Header */}
                <AdminHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />

                {/* offer */}
                {loadingOffers ? (
                    <div className="loading-spinner"></div>
                ) : errorOffers ? (
                    <div className="error-message">Error fetch offers</div>
                ) : offers.length === 0 ? (
                    <div className="error-message">No offers added yet</div>
                ) : (
                    <div className="flex-grow">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 justify-items-center">
                            {offers.map((offer) => (
                                <OfferCard offer={offer} isAdmin={true} />
                            ))}
                        </div>  
                    </div>

                )}


                {/* Pagination */}
                <div className="flex justify-center py-4 ">
                    <Pagination
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default OfferAdmin;