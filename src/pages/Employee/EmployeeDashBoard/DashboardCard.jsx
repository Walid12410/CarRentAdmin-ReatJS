import { Link } from "react-router-dom";
import { ReactComponent as CarIcon } from '../../../assets/admin-icon/car-front-fill.svg';
import { ReactComponent as OfferIcon } from '../../../assets/admin-icon/offer-icon.svg';
import { ReactComponent as BookingIcon } from '../../../assets/admin-icon/booking-icon.svg';

const EmployeeDashBoardCard = () => {
    return (
        <div className="flex flex-wrap gap-4 p-4">
            <div className="bg-gray-800 shadow-md rounded-lg p-4 w-64">
                <h5 className="text-lg font-semibold text-white mb-2">
                    Booking
                </h5>
                <div className="text-3xl font-bold text-white mb-4">120</div>
                <div className="flex items-center justify-between">
                    <Link className="text-blue-500 hover:text-blue-700 font-medium">
                        See all
                    </Link>
                    <div className="bg-blue-500 p-2 rounded-full">
                        <BookingIcon width="20" height="20" fill="white" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-4 w-64">
                <h5 className="text-lg font-semibold text-white mb-2">
                    Cars
                </h5>
                <div className="text-3xl font-bold text-white mb-4">235</div>
                <div className="flex items-center justify-between">
                    <Link className="text-blue-500 hover:text-blue-700 font-medium">
                        See all
                    </Link>
                    <div className="bg-blue-500 p-2 rounded-full">
                        <CarIcon width="20" height="20" fill="white" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-4 w-64">
                <h5 className="text-lg font-semibold text-white mb-2">
                    Offers
                </h5>
                <div className="text-3xl font-bold text-white mb-4">235</div>
                <div className="flex items-center justify-between">
                    <Link className="text-blue-500 hover:text-blue-700 font-medium">
                        See all
                    </Link>
                    <div className="bg-blue-500 p-2 rounded-full">
                        <OfferIcon width="20" height="20" fill="white" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 shadow-md rounded-lg p-4 w-64">
                <h5 className="text-lg font-semibold text-white mb-2">
                    End rented car
                </h5>
                <div className="text-3xl font-bold text-white mb-4">353</div>
                <div className="flex items-center justify-between">
                    <Link className="text-blue-500 hover:text-blue-700 font-medium">
                        See all
                    </Link>
                    <div className="bg-blue-500 p-2 rounded-full">
                        <BookingIcon width="20" height="20" fill="white" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDashBoardCard;
