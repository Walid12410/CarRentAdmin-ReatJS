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
    const { companyCarsCount, companyCars, loadingCompanyCars, errorCompanyCars } = useSelector(state => state.car);
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
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? " " : " ml-64 "} w-full`}>
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="text-ms font-bold text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer	 m-2 text-center p-2">
                    New Car
                </div>
                {loadingCompanyCars ? (
                    <div className="loading-spinner"></div>
                ) : errorCompanyCars ? (
                    <div className="error-message">Error fetch car</div>
                ) : companyCars.length === 0 ? (
                    <div className="error-message">No car added yet</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 justify-items-center">
                            {companyCars?.map((car) => (
                                <CarCard car={car} />
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

export default CarPage;