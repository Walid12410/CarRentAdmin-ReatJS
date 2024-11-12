import { FaEdit, FaTrash } from 'react-icons/fa';

const  PromoCard = ({promo}) => {
  return (
    <div key={promo.id} className="max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={promo?.promoImage?.url || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt={promo.promoTitle} className="w-full h-48 object-fit" />
        <div className="absolute top-0 right-0 m-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          {promo?.status}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{promo?.promoTitle}</h3>
          <div className="flex space-x-2 text-gray-600">
            <FaEdit className="cursor-pointer hover:text-blue-500" title="Edit" />
            <FaTrash className="cursor-pointer hover:text-red-500" title="Delete" />
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>Start Date: <span className="font-medium"> {new Date(promo?.startDate).toDateString()}</span></p>
          <p>End Date: <span className="font-medium"> {new Date(promo?.endDate).toDateString()}</span></p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm text-gray-600">Usage Limit: <span className="font-medium">{promo?.usageLimit}</span></p>
          <p className="text-sm text-green-600 font-medium">Discount: {promo?.discountPercentage}%</p>
        </div>
        <p className="mt-3 text-gray-700 text-sm"> {promo?.promoDescription}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-semibold text-gray-800">Promo Code: <span className="text-blue-600">{promo?.promoCode}</span></p>
          <p className="text-sm text-gray-600">Used Count: <span className="font-medium">{promo?.usedCount}</span></p>
        </div>
      </div>
    </div>
  );
}

export default PromoCard;