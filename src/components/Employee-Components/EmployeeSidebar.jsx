import { Link } from "react-router-dom";
import { ReactComponent as DashboardIcon } from '../../assets/admin-icon/columns.svg';
import { ReactComponent as BuildingIcon } from '../../assets/admin-icon/building.svg';
import { ReactComponent as CarIcon } from '../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as CouponsIcon } from '../../assets/admin-icon/discount-voucher-icon.svg';
import { ReactComponent as SaleIcon } from '../../assets/admin-icon/offer-icon.svg';
import { ReactComponent as PersonIcon } from '../../assets/admin-icon/person-circle.svg';
import { ReactComponent as LogOutIcon } from '../../assets/admin-icon/enter-icon.svg';
import { ReactComponent as BookingIcon } from '../../assets/admin-icon/booking-icon.svg';
import { ReactComponent as NoticationIcon } from '../../assets/admin-icon/notification-alert-icon.svg';

const EmployeeSideBar = ({ sidebarToggle }) => {
    return (
        <div className={`${sidebarToggle ? " hidden " : " block "} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
            <ul className="dashboard-list mt-2">
                <Link to={`/employee`}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <DashboardIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Dashboard
                </Link>
                <hr />
                <Link
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline" >
                    <BuildingIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2 " />
                    Comapany
                </Link>
                <Link
                    to={"/employee/promo-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <CouponsIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2 " />
                    Promo
                </Link>
                <Link
                    to={"/employee/offer-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <SaleIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Offer
                </Link>
                <Link to={`/employee/car-page`}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <CarIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Car
                </Link>
                <Link
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <BookingIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Booking
                </Link>
                <Link
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <NoticationIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Notification
                </Link>
                <Link
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <LogOutIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2 " />
                    Log out
                </Link>
            </ul>
        </div>
    );
}

export default EmployeeSideBar;