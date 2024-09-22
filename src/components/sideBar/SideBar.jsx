import "./side-bar.css";
import { Link } from "react-router-dom";
import { ReactComponent as DashboardIcon } from '../../assets/admin-icon/columns.svg';
import { ReactComponent as BuildingIcon } from '../../assets/admin-icon/building.svg';
import { ReactComponent as CarIcon } from '../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as CouponsIcon } from '../../assets/admin-icon/discount-voucher-icon.svg';
import { ReactComponent as SaleIcon } from '../../assets/admin-icon/offer-icon.svg';
import { ReactComponent as PersonIcon } from '../../assets/admin-icon/person-circle.svg';
import { ReactComponent as PeopleIcon } from '../../assets/admin-icon/people.svg';
import { ReactComponent as TagsIcon } from '../../assets/admin-icon/tags-fill.svg';
import { ReactComponent as LogOutIcon } from '../../assets/admin-icon/enter-icon.svg';
import { ReactComponent as BookingIcon } from '../../assets/admin-icon/booking-icon.svg';
import { ReactComponent as NoticationIcon } from '../../assets/admin-icon/notification-alert-icon.svg';


const AdminSideBar = () => {
    return (
        <div className="admin-sidebar">
            <Link to={"/admin"} className="admin-sidebar-title">
                <DashboardIcon width="20" height="20" fill="white" />
                Dashboard
            </Link>
            <ul className="admin-dashboard-list">
                <Link to={"/admin/user-table"} className="admin-sidebar-link">
                    <PersonIcon width="20" height="20" fill="white" />
                    Users
                </Link>
                <Link to={"/admin/category-table"} className="admin-sidebar-link">
                    <TagsIcon width="20" height="20" fill="white" />
                    Categories
                </Link>
                <Link to={"/admin/company-table"} className="admin-sidebar-link" >
                    <BuildingIcon width="20" height="20" fill="white" />
                    Comapanies
                </Link>
                <Link to={"/admin/employee-table"} className="admin-sidebar-link">
                    <PeopleIcon width="20" height="20" fill="white" />
                    Employee
                </Link>
                <Link to={"/admin/promo-table"} className="admin-sidebar-link">
                    <CouponsIcon width="20" height="20" fill="white" />
                    Promo
                </Link>
                <Link to={"/admin/offer-table"} className="admin-sidebar-link">
                    <SaleIcon width="20" height="20" fill="white" />
                    Offer
                </Link>
                <Link to={"/admin/car-rent-table"} className="admin-sidebar-link">
                    <CarIcon width="20" height="20" fill="white" />
                    Car Rent
                </Link>
                <Link to={"/admin/booking-table"} className="admin-sidebar-link">
                    <BookingIcon width="20" height="20" fill="white" />
                    Booking
                </Link>
                <Link to={"/admin/notification-table"} className="admin-sidebar-link">
                    <NoticationIcon width="20" height="20" fill="white" />
                    Notification
                </Link>
                <Link to={"/admin/user-table"} className="admin-sidebar-link">
                    <LogOutIcon width="20" height="20" fill="white" />
                    Log out
                </Link>

            </ul>
        </div>
    );
}

export default AdminSideBar;