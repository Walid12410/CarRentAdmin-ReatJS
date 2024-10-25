import "./admin-main.css";
import { Link } from "react-router-dom";
import { ReactComponent as BuildingIcon } from '../../../assets/admin-icon/building.svg';
import { ReactComponent as CarIcon } from '../../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as PersonIcon } from '../../../assets/admin-icon/person-circle.svg';
import { ReactComponent as BookingIcon } from '../../../assets/admin-icon/booking-icon.svg';
import LatestCar from "../AdminDashBoardDetails/LatestCar";
import AdminHeader from "../../../components/header/HeaderAdmin";

const AdminMain = () => {

    return (  
        <div className="admin-main">
            <AdminHeader />
            <div className="admin-main-header">
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Users
                    </h5>
                    <div className="admin-cart-count">120</div>
                    <div className="admin-card-link-wrapper">
                        <Link  className="admin-card-link">
                            See all users
                        </Link>
                        <div className="admin-card-icon">
                        <PersonIcon width="20" height="20" fill="white" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Car Rent
                    </h5>
                    <div className="admin-cart-count">235</div>
                    <div className="admin-card-link-wrapper">
                        <Link  className="admin-card-link">
                            See all Cars
                        </Link>
                        <div className="admin-card-icon">
                        <CarIcon width="20" height="20" fill="white" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Company
                    </h5>
                    <div className="admin-cart-count">235</div>
                    <div className="admin-card-link-wrapper">
                        <Link  className="admin-card-link">
                            See all Company
                        </Link>
                        <div className="admin-card-icon">
                        <BuildingIcon width="20" height="20" fill="white" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Booking
                    </h5>
                    <div className="admin-cart-count">353</div>
                    <div className="admin-card-link-wrapper">
                        <Link className="admin-card-link">
                            See all booking
                        </Link>
                        <div className="admin-card-icon">
                        <BookingIcon width="20" height="20" fill="white" />
                        </div>
                    </div>
                </div>
            </div>
            <LatestCar />
        </div>
    );
}
 
export default AdminMain;