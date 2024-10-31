import { useParams } from "react-router-dom";
import AdminSideBar from "../../../../../components/Admin-Components/sideBar/SideBar";
import "./car-details.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCar } from "../../../../../redux/api/carApiCall";


const CarDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { car, loadingCar } = useSelector(state => state.car);

    useEffect(() => {
        dispatch(fetchOneCar(id));
        window.scrollTo(0, 0);
    }, [dispatch]);

    return (
        <section className="page-container">
            <AdminSideBar />
            <div className="wrapper">
                <h1 className="page-title">Car Details</h1>
                <div className="car-image-container">
                    {car?.CarImage?.map((imageObj, index) => (
                        <img
                            key={index}
                            src={imageObj.carImage.url}
                            alt={`Car Image ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="car-title">{car?.CarMake?.carMakeName} {car?.carModel}</div>

                <div className="car-details">
                    <div className="car-detail">
                        <h1 className="car-details-title">Car Details</h1>
                        <div className="car-details-text">Car Name: {car?.CarMake?.carMakeName} {car?.carModel}</div>
                        <div className="car-details-text">Year: {car?.year}</div>
                        <div className="car-details-text">Color: {car?.color}</div>
                        <div className="car-details-text">Car Status: {car?.carStatus}</div>
                        <div className="car-details-text">License Plate: {car?.licensePlate}</div>
                        <div className="car-details-text">Mileage: {car?.mileage}</div>
                        <div className="car-details-text">Fuel Type: {car?.fuelType}</div>
                        <div className="car-details-text">Transmission: {car?.transmission}</div>
                        <div className="car-details-text">Rent Price: {car?.rentPrice} $/day</div>
                        <div className="car-details-text">Category: {car?.Category?.categoryName}</div>
                        <div className="car-details-text">Created At: {new Date(car?.createdAt).toDateString()}</div>
                    </div>
                    <div className="car-details-company">
                        <h1 className="car-details-title">Company</h1>
                        <div className="company-img-details">
                            <img className="company-img" src={car?.companyDetails?.imageCompany?.image?.url} alt="Company Logo" />
                            <div className="company-name-email">
                                <div className="company-details-text">{car?.companyDetails?.companyEmail}</div>
                                <div className="car-details-text">{car?.companyDetails?.companyName}</div>
                            </div>
                        </div>
                        <div className="company-details">
                            <div className="company-details-text">Company Phone Number: {car?.companyDetails?.companyPhoneNumber}</div>
                            <div className="company-details-text">Company Address: {car?.companyDetails?.companyAddress}</div>
                            <div className="company-details-text">Company State: {car?.companyDetails?.companyState}</div>
                            <div className="company-details-text">Company City: {car?.companyDetails?.companyCity}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CarDetails;
