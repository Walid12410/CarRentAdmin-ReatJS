import AdminSideBar from "../../../../components/sideBar/SideBar";
import { ReactComponent as StarIcon } from '../../../../assets/admin-icon/star.svg';
import "./car-rent.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { countCar, fetchCars } from "../../../../redux/api/carApiCall";
import Pagination from "../../../../components/pagination/Pagination";
import { Link } from "react-router-dom";

const CAR_PER_PAGE = 6;

const CarRent = () => {
    const dispatch = useDispatch();
    const { carsCount, cars, loadingCars, errorCars } = useSelector(state => state.car);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(carsCount / CAR_PER_PAGE);

    useEffect(() => {
        dispatch(fetchCars(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countCar());
    }, [dispatch]);

    return (
        <>
            <section className="admin-dashboard">
                <AdminSideBar />
                <div className="car-wrapper">
                    <h1 className="car-title">Car Rent</h1>
                    {loadingCars ? (
                        <div className="loading-spinner"></div>
                    ) : errorCars ? (
                        <div className="error-message">Error fetching cars</div>
                    ) : (
                        <>
                            <div className="car-wrapper-card">
                                {cars?.map((car) => (
                                    <div key={car.id} className="car-card">
                                        <div className="car-image-container">
                                            <img
                                                src={car?.CarImage[0]?.carImage?.url || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}
                                                className="car-image"
                                                alt={`${car?.carMake} ${car?.carModel}`}
                                            />
                                            <div className="car-status">{car?.carStatus}</div>
                                        </div>
                                        <div className="car-details">
                                            <div className="car-name">
                                                {car?.carMake} {car?.carModel} - {car?.year}
                                            </div>
                                            <div className="car-price">{car?.rentPrice} $/day</div>
                                        </div>
                                        <div className="car-rate">
                                            <StarIcon width="20" height="20" />
                                            <div className="rate-details">
                                                {car?.reviewCount} ({car?.averageRating} reviews)
                                            </div>
                                        </div>
                                        <Link className="car-details-button" to={`/admin/car-rent/car-details/${car?._id}`}>More Details</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination-container">
                                <Pagination
                                    pages={pages}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>
                        </>
                    )}>
                </div>
            </section>
        </>
    );
};

export default CarRent;
