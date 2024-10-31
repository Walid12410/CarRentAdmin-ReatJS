import { Link } from "react-router-dom";
import { ReactComponent as DashboardIcon } from '../../../assets/admin-icon/columns.svg';
import { ReactComponent as BuildingIcon } from '../../../assets/admin-icon/building.svg';
import { ReactComponent as CarIcon } from '../../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as CouponsIcon } from '../../../assets/admin-icon/discount-voucher-icon.svg';
import { ReactComponent as SaleIcon } from '../../../assets/admin-icon/offer-icon.svg';
import { ReactComponent as PersonIcon } from '../../../assets/admin-icon/person-circle.svg';
import { ReactComponent as LogOutIcon } from '../../../assets/admin-icon/enter-icon.svg';
import { ReactComponent as BookingIcon } from '../../../assets/admin-icon/booking-icon.svg';
import { ReactComponent as NoticationIcon } from '../../../assets/admin-icon/notification-alert-icon.svg';
import "../../side-bar.css";

const EmployeeSideBar = () => {
    return (
        <div className="sidebar">
            <Link to={"/employee"} className="sidebar-title">
                <DashboardIcon width="20" height="20" fill="white" />
                Dashboard
            </Link>
            <ul className="dashboard-list">
                <Link to={"/employee/user"} className="sidebar-link">
                    <PersonIcon width="20" height="20" fill="white" />
                    Users
                </Link>
                <Link to={"/employee/company"} className="sidebar-link" >
                    <BuildingIcon width="20" height="20" fill="white" />
                    Comapanies
                </Link>
                <Link to={"/employee/promo"} className="sidebar-link">
                    <CouponsIcon width="20" height="20" fill="white" />
                    Promo
                </Link>
                <Link to={"/employee/offer"} className="sidebar-link">
                    <SaleIcon width="20" height="20" fill="white" />
                    Offer
                </Link>
                <Link to={"/employee/car"} className="sidebar-link">
                    <CarIcon width="20" height="20" fill="white" />
                    Car
                </Link>
                <Link to={"/employee/booking"} className="sidebar-link">
                    <BookingIcon width="20" height="20" fill="white" />
                    Booking
                </Link>
                <Link to={"/employee/notification"} className="sidebar-link">
                    <NoticationIcon width="20" height="20" fill="white" />
                    Notification
                </Link>
                <Link to={"/employee/user"} className="sidebar-link">
                    <LogOutIcon width="20" height="20" fill="white" />
                    Log out
                </Link>
            </ul>
        </div>
    );
}

export default EmployeeSideBar;