import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { countCompanyBooking, fetchCompanyBooking } from "../../../redux/api/bookingApiCall";
import BookingCard from "../../../components/BookingCard";
import Pagination from "../../../components/Pagination";

const BookingPage = () => {

    const dispatch = useDispatch();


    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { companyBooking, loadingCompanyBooking,companyBookingCount } = useSelector((state) => state.booking);

    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil((companyBookingCount?.bookingCount ?? 1) / 10);

    useEffect(() => {
        dispatch(fetchCompanyBooking(currentPage));
        dispatch(countCompanyBooking());
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="flex min-h-screen">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col`}>
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                {loadingCompanyBooking ? (
                    <div className="loading-spinner"></div>
                ) : companyBooking.length === 0 ? (
                    <div className="error-message">
                        No booking added yet
                    </div>
                ) : (
                    companyBooking.map((booking) => (
                        <div className="w-full p-6 flex flex-col items-center">
                            <BookingCard booking={booking} />
                        </div>
                    ))
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
};

export default BookingPage;
