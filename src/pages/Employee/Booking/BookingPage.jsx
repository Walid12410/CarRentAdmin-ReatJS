import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyBooking } from "../../../redux/api/bookingApiCall";
import BookingCard from "../../../components/BookingCard";

const BookingPage = () => {
    
    const dispatch = useDispatch();


    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { companyBooking , loadingCompanyBooking } = useSelector((state) => state.booking);

    useEffect(()=>{
        dispatch(fetchCompanyBooking());
        window.scrollTo(0,0);
    },[dispatch]);

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
            </div>
        </div>
    );
};

export default BookingPage;
