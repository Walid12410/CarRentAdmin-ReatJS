import { Link } from 'react-router-dom';
import { ReactComponent as StarIcon } from '../assets/admin-icon/star.svg';


const CarCard = ({ car }) => {
    return (
        <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 w-4/5">
            <div className="relative">
                <img
                    src={car?.CarImage[0]?.carImage?.url || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}
                    className="w-full h-48 object-fit"
                    alt={`${car?.carMake} ${car?.carModel}`}
                />
                <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                    {car?.carStatus}
                </div>
            </div>
            <div className="p-1">
                <div className="text-lg font-semibold text-gray-800">
                    {car?.CarMake?.carMakeName} {car?.carModel} - {car?.year}
                </div>
                <div className="text-xl font-bold text-gray-800 mt-2">
                    {car?.rentPrice}  $/day
                </div>
            </div>
            <div className="flex items-center p-2 text-gray-600">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <div className="ml-2">
                    {car?.reviewCount} ({car?.averageRating} reviews)
                </div>
            </div>
            <div className="p-2">
                <Link
                    className="inline-block w-full text-center py-2 px-4 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition">
                    More Details
                </Link>
            </div>
        </div>
    );
}

export default CarCard;