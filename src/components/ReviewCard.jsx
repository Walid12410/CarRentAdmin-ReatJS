import { FaTrashAlt } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const handleDelete = (reviewId) => {
        // Dispatch a delete action (placeholder)
        console.log(`Delete review with ID: ${reviewId}`);
    };

    return (
        <div key={review?._id} className="bg-white shadow rounded p-4 flex flex-col justify-between">
            {/* Car Image */}
            <div className="relative">
                <img
                    src={review?.CarImage?.[0]?.carImage?.url}
                    alt={review?.car?.carModel || "Car Image"}
                    className="w-full h-52 object-fill rounded"
                />
                {/* Delete Icon */}
                <button
                    onClick={() => handleDelete(review?._id)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
                >
                    <FaTrashAlt size={18} />
                </button>
            </div>

            {/* Review Details */}
            <div className="mt-4 flex-grow">
                <h3 className="text-lg font-semibold">
                    {review?.car?.carModel || "Unknown Model"} ({review?.car?.year || "Year Not Available"})
                </h3>
                <p className="text-sm text-gray-500">Color: {review?.car?.color || "N/A"}</p>
                <p className="text-sm text-gray-500">Rate: {review?.rate || "No Rating"} / 5</p>
                <p className="mt-2 text-sm">{review?.reviewText || "No review text available."}</p>
            </div>

            {/* User Details */}
            <div className="mt-4 flex items-center border-t pt-4">
                <img
                    src={review?.user?.profilePhoto?.url || "https://via.placeholder.com/150"}
                    alt={`${review?.user?.firstName || "User"} ${review?.user?.lastName || ""}`}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                    <div className="text-sm font-medium">
                        {review?.user?.firstName || "First Name"} {review?.user?.lastName || "Last Name"}
                    </div>
                    <div className="text-xs text-gray-500">{review?.user?.email || "Email not available"}</div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
