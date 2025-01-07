import { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa'; // Import edit and delete icons
import { FaCalendarTimes } from 'react-icons/fa'; // Import a small icon for the end date
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { sendNotificationForSpecificUser } from '../redux/api/notificationApiCall';
import { updateBooking } from '../redux/api/bookingApiCall';

const BookingCard = ({ booking }) => {

    const dispatch = useDispatch();

    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { isNotificationSend, loadingSendNotification } = useSelector(state => state.notification);
    const [isDelivered, setIsDelivered] = useState(booking?.isDelivered || false);

    const notificationSubmitHandler = () => {
        if (loadingSendNotification) return;

        if (title.trim() === '' || description.trim() === '') {
            return toast.error("title or description can not be empty!");
        }

        // send notification for specific user
        dispatch(sendNotificationForSpecificUser(title, description, booking?.user?._id));
    }

    useEffect(() => {
        if (isNotificationSend) {
            setModalOpen(false);
            setTitle('');
            setDescription('');
        }
    }, [isNotificationSend]);

    const handleChange = (event) => {
        const value = event.target.value === "true"; // Convert string to boolean
        setIsDelivered(value);

        const data = {
            "isDelivered": value
        }

        dispatch(updateBooking(booking._id, data));
    };

    // Function to check if the booking has ended
    const isBookingEnded = new Date(booking?.endDate) < new Date();

    return (
        <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Car Image */}
            <div className="w-full md:w-52 h-52 overflow-hidden rounded-lg shadow-md">
                <img
                    className="w-full h-full object-fill"
                    src={booking?.CarImage[0]?.carImage.url}
                    alt="Car Image"
                />
            </div>

            {/* Car Details */}
            <div className="flex flex-col space-y-3 flex-grow text-center">
                <p className="text-2xl font-semibold">{booking?.car?.carModel}</p>
                <p className="text-gray-700">Start Date: <span className="font-medium">{new Date(booking?.startDate).toLocaleDateString()}</span></p>

                {/* Conditionally render the end date and icon */}
                <p className="text-gray-700">End Date:
                    <span className="font-medium">{new Date(booking?.endDate).toLocaleDateString()}</span>
                    {isBookingEnded && <FaCalendarTimes className="inline-block ml-2 text-red-500" title="Booking Ended" />}
                </p>
                <p className="text-gray-700">Main Car Price: <span className="font-medium">{booking?.mainCarPrice} $</span></p>
                <p className="text-gray-700">Total Rent Price <span className="font-medium">{booking?.totalRentPrice} $</span></p>
                <p className="text-gray-700">Days Rent: <span className="font-medium">{booking?.daysRent}</span></p>
                <p className="text-gray-700">Discount Percentage <span className="font-medium">{booking?.discountPercent} %</span></p>
                <p className="text-gray-700">Promo: <span className="font-medium">{booking?.promoCode ?? " "}</span></p>
            </div>

            {/* User Details */}
            <div className="flex flex-col items-center space-y-3 ml-4 md:ml-0">
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
                    <img
                        className="w-full h-full object-cover"
                        src={booking?.user?.profilePhoto?.url}
                        alt="Profile"
                    />
                </div>
                <p className="text-xl font-semibold flex items-center gap-2">
                    {booking?.user?.firstName} {booking?.user?.lastName}
                    <FaTelegramPlane
                        onClick={() => setModalOpen(true)}
                        className="text-yellow-500 cursor-pointer" title="Send Notification" />
                </p>
                <p className="text-gray-700">Email: <span className="font-medium">{booking?.user?.email}</span></p>
                <p className="text-gray-700">Phone: <span className="font-medium">{booking?.user?.phoneNumber}</span></p>
                <p className="text-gray-700">Location: <span className="font-medium">{booking?.user?.locationName}</span></p>

                {/* Direct Location Link */}
                {booking?.user?.latitude && booking?.user?.longitude && (
                    <a
                        href={`https://www.google.com/maps?q=${booking?.user?.latitude},${booking?.user?.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 mt-2"
                    >
                        View Location on Map
                    </a>
                )}

            </div>

            {/* Delivered Status */}
            <div className="flex flex-col space-y-2 w-full md:w-40">
                <label htmlFor="isDelivered" className="text-gray-600">Delivered Status</label>
                <select
                    id="isDelivered"
                    value={isDelivered}
                    onChange={handleChange}
                    className="bg-gray-100 p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value={false}>Undelivered</option>
                    <option value={true}>Delivered</option>
                </select>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold mb-4">Send Notification</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter title"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Description</label>
                            <textarea
                                className="w-full p-2 border rounded-md"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter description"
                                rows="4"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded-md"
                                onClick={() => setModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-gray-800 text-white px-4 py-2 rounded-md"
                                onClick={() => notificationSubmitHandler()}
                            >
                                {loadingSendNotification ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingCard;
