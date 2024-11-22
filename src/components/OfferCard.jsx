import { FaEdit, FaTrash } from 'react-icons/fa';

const OfferCard = ({ offer }) => {
    return (
        <div key={offer?._id} className="w-10/12 mx-auto mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
                <img src={offer?.car?.CarImage[0]?.carImage.url || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt={offer?.offerTitle} className="w-full h-52 object-fit" />
                <div className="absolute top-0 right-0 m-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                Car {offer?.car?.carStatus}
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{offer?.offerTitle}</h3>
                    <div className="flex space-x-2 text-gray-600">
                        <FaEdit className="cursor-pointer hover:text-blue-500" title="Edit" />
                        <FaTrash className="cursor-pointer hover:text-red-500" title="Delete" />
                    </div>
                </div>
                <div className="text-sm text-gray-600">
                    <p>Start Date: <span className="font-medium"> {new Date(offer?.startDate).toDateString()}</span></p>
                    <p>End Date: <span className="font-medium"> {new Date(offer?.endDate).toDateString()}</span></p>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-sm text-gray-600">Orignal Price: <span className="font-medium">{offer?.car?.rentPrice}$/day</span></p>
                    <p className="text-sm text-green-600 font-medium">Discount: {offer?.discountPrice}$/day</p>
                </div>
                <p className="mt-3 text-gray-700 text-sm"> {offer?.car?.CarMake?.carMakeName} {offer?.car?.carModel} - {offer?.car?.year}</p>
            </div>
        </div>
    );
}

export default OfferCard;
