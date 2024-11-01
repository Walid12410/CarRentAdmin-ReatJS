import { Link } from "react-router-dom";
import { ReactComponent as BuildingIcon } from '../../../../assets/admin-icon/building.svg';
import { ReactComponent as CarIcon } from '../../../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as OfferIcon } from '../../../../assets/admin-icon/offer-icon.svg';
import { ReactComponent as BookingIcon } from '../../../../assets/admin-icon/booking-icon.svg';
import "../employee-main.css";


const EmployeeDashBoardCard = () => {
    return (
        <div className="employee-main-header">
        <div className="employee-main-card">
            <h5 className="employee-card-title">
                Booking
            </h5>
            <div className="employee-cart-count">120</div>
            <div className="employee-card-link-wrapper">
                <Link className="employee-card-link">
                    See all
                </Link>
                <div className="employee-card-icon">
                    <BookingIcon width="20" height="20" fill="white" />
                </div>
            </div>
        </div>
        <div className="employee-main-card">
            <h5 className="employee-card-title">
                Cars
            </h5>
            <div className="employee-cart-count">235</div>
            <div className="employee-card-link-wrapper">
                <Link className="employee-card-link">
                    See all
                </Link>
                <div className="employee-card-icon">
                    <CarIcon width="20" height="20" fill="white" />
                </div>
            </div>
        </div>
        <div className="employee-main-card">
            <h5 className="employee-card-title">
                Offers
            </h5>
            <div className="employee-cart-count">235</div>
            <div className="employee-card-link-wrapper">
                <Link className="employee-card-link">
                    See all
                </Link>
                <div className="employee-card-icon">
                    <OfferIcon width="20" height="20" fill="white" />
                </div>
            </div>
        </div>
        <div className="employee-main-card">
            <h5 className="employee-card-title">
                End rented car
            </h5>
            <div className="employee-cart-count">353</div>
            <div className="employee-card-link-wrapper">
                <Link className="employee-card-link">
                    See all
                </Link>
                <div className="employee-card-icon">
                    <BookingIcon width="20" height="20" fill="white" />
                </div>
            </div>
        </div>
    </div>

    );
}

export default EmployeeDashBoardCard;