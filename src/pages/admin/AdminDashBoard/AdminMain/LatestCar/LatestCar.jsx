import "./latest-car.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestCar } from "../../../../../redux/api/carApiCall";
import { Link } from "react-router-dom";
import { fetchLatestOffer } from "../../../../../redux/api/offerApiCall";


const LatestCar = () => {

    const dispatch = useDispatch();
    const { latestCar, loadingLatestCar, errorLatestCar } = useSelector(state => state.car);
    const { latestOffer, loadingLatestOffer, errorLatestOffer } = useSelector(state => state.offer);


    useEffect(() => {
        dispatch(fetchLatestCar());
        dispatch(fetchLatestOffer());
        window.scrollTo(0, 0);
    }, [dispatch]);

    return (
        <div className="tables-container">
            {/* Latest Car Table */}
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Latest Car Added</h1>
                    <button className="view">View More</button>
                </div>
                <div className="report-body">
                    {loadingLatestCar ? (
                        <p>Loading....</p>
                    ) : errorLatestCar ? (
                        <p>Error fetching latest car</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Car Make</th>
                                    <th>Car Model</th>
                                    <th>Year</th>
                                    <th>Color</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Car Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestCar?.map((car) => (
                                    <tr>
                                        <td>{car?.CarMake.carMakeName}</td>
                                        <td>{car?.carModel}</td>
                                        <td>{car?.year}</td>
                                        <td>{car?.color}</td>
                                        <td>{car?.rentPrice}$/day</td>
                                        <td><span className="label-tag">{car?.carStatus}</span></td>
                                        <td>
                                            <Link to={`car-details/${car?._id}`}>
                                                <span className="label-tag">View Details</span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            {/* Offer Table */}
            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Latest Offers</h1>
                    <button className="view">View More</button>
                </div>
                <div className="report-body">
                    {loadingLatestOffer ? (
                        <p>Loading...</p>
                    ) : errorLatestOffer ? (
                        <p>Error fetching latest offer</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Offer Title</th>
                                    <th>Car Name</th>
                                    <th>Original Price</th>
                                    <th>Discount Price</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Offer Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestOffer?.map((offer) => (
                                    <tr>
                                        <td>{offer?.offerTitle}</td>
                                        <td>{offer?.car[0]?.carMake} {offer?.car[0]?.carModel}</td>
                                        <td>{offer?.car[0]?.rentPrice}$/day</td>
                                        <td>{offer?.discountPrice}$/day</td>
                                        <td>{new Date(offer?.startDate).toDateString()}</td>
                                        <td>{new Date(offer?.endDate).toDateString()}</td>
                                        <td>
                                            <Link to={`offer-details/${offer?._id}`}>
                                                <span className="label-tag">View Details</span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    )}
                </div>
            </div>
        </div>
    );
}

export default LatestCar;
