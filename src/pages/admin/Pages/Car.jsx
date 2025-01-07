import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCar, fetchCars } from "../../../redux/api/carApiCall";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import CarCard from "../../../components/CarCard";
import Pagination from "../../../components/Pagination";



const CarAdmin = () => {

    const dispatch = useDispatch();


    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { cars, loadingCars, errorCars, carsCount } = useSelector(state => state.car);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(carsCount?.carRentCount / 6);

    useEffect(() => {
        dispatch(fetchCars(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countCar());
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

                {/* car list */}
                {loadingCars ? (
                    <div className="loading-spinner"></div>
                ) : errorCars ? (
                    <div className="error-message">Error fetch cars</div>
                ) : cars.length === 0 ? (
                    <div className="error-message">No car added yet</div>
                ) : (
                    <div className="flex-grow">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 justify-items-center">
                            {cars?.map((car) => (
                                <CarCard key={car?._id} car={car} isAdmin={true} />
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

export default CarAdmin;