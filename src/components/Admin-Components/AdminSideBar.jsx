import { Link } from "react-router-dom";
import { ReactComponent as DashboardIcon } from '../../assets/admin-icon/columns.svg';
import { ReactComponent as BuildingIcon } from '../../assets/admin-icon/building.svg';
import { ReactComponent as CarIcon } from '../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as CouponsIcon } from '../../assets/admin-icon/discount-voucher-icon.svg';
import { ReactComponent as SaleIcon } from '../../assets/admin-icon/offer-icon.svg';
import { ReactComponent as ReviewIcon } from '../../assets/admin-icon/review.svg';
import { ReactComponent as LogOutIcon } from '../../assets/admin-icon/enter-icon.svg';
import { ReactComponent as BookingIcon } from '../../assets/admin-icon/booking-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/admin-icon/person-circle.svg';
import { ReactComponent as CategoryIcon } from '../../assets/admin-icon/tags-fill.svg';
import { ReactComponent as PeopleIcon } from '../../assets/admin-icon/people.svg';

const AdminSideBar = ({ sidebarToggle }) => {
    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
            <ul className="dashboard-list mt-2">
                <Link to={`/admin`}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <DashboardIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Dashboard
                </Link>
                <hr />
                <Link to={"/admin/user-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <UserIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    User
                </Link>
                <Link to={"/admin/company-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <BuildingIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Company
                </Link>
                <Link to={`/admin/booking-page`}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <PeopleIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                     Employee
                </Link>

                <Link to={"/admin/category-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <CategoryIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Category
                </Link>


                <Link to={"/admin/promo-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <CouponsIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Promo
                </Link>
                <Link to={"/admin/offer-page"}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <SaleIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Offer
                </Link>
                <Link to={`/admin/car-page`}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <CarIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Car
                </Link>
                <Link 
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <BookingIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                     Booking
                </Link>

                <Link to={`/admin/review-page`}
                    className="mb-2 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline block">
                    <ReviewIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2" />
                    Review
                </Link>
            </ul>
            <div className="absolute bottom-5 w-full">
                <Link
                    className="mb-5 rounded text-white hover:shadow hover:bg-blue-500 py-2 no-underline">
                    <LogOutIcon width="20" height="20" fill="white"
                        className="inline-block w-6 h-6 mr-2 -mt-2 " />
                    Log out
                </Link>
            </div>
        </div>
    );
}

export default AdminSideBar;
