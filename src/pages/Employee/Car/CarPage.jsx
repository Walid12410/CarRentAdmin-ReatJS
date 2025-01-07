import { useEffect, useState } from "react";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { countCompanyCar, fetchCompanyCar } from "../../../redux/api/carApiCall";
import Pagination from "../../../components/Pagination";
import CarCard from "../../../components/CarCard";

const CarPage = () => {
    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { companyCarsCount, companyCars, loadingCompanyCars, errorCompanyCars } = useSelector(
        (state) => state.car
    );
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(companyCarsCount?.carRentCount / 6);

    useEffect(() => {
        dispatch(fetchCompanyCar(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countCompanyCar());
    }, [dispatch]);

    return (
        <div className="flex min-h-screen">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? " " : " ml-64 "} w-full flex flex-col`}>
                {/* Header */}
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />

                {/* Main Content */}
                <div className="flex-grow flex flex-col">
                    <Link
                        to={`/employee/car-page/new-car`}
                        className="text-sm font-bold no-underline text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 ml-2 text-center flex items-center justify-center rounded"
                    >
                        New Car
                    </Link>

                    {loadingCompanyCars ? (
                        <div className="loading-spinner">
                        </div>
                    ) : errorCompanyCars ? (
                        <div className="error-message">
                            Error fetching cars
                        </div>
                    ) : companyCars.length === 0 ? (
                        <div className="error-message">
                            No cars added yet
                        </div>
                    ) : (
                        <div className="flex-grow">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 justify-items-center">
                                {companyCars?.map((car) => (
                                    <CarCard key={car._id} car={car} isAdmin={false}/>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

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

export default CarPage;
