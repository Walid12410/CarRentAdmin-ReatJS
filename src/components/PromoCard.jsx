import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { deletePromo } from "../../src/redux/api/promoApiCall"
import { useEffect } from 'react';

const PromoCard = ({ promo }) => {

  const dispatch = useDispatch();
  const { isPromoDeleted } = useSelector(state => state.promo);

  const deletePromoHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, this promo will remove from your system",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title: "Deleting...",
            text: "Please wait while we delete the promo.",
            icon: "info",
            buttons: false,
            closeOnClickOutside: false,
            closeOnEsc: false,
          });
          dispatch(deletePromo(promo._id));
        } else {
          swal("Something went wrong!");
        }
      });
  }

  useEffect(() => {
    if (isPromoDeleted) {
      swal("Deleted!", "The promo has been successfully deleted.", "success");
    }
  }, [isPromoDeleted]);

  return (
    <div key={promo._id} className="w-10/12 mx-auto mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={promo?.promoImage?.url || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt={promo.promoTitle} className="w-full h-52 object-fit" />
        <div className="absolute top-0 right-0 m-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          {promo?.status}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{promo?.promoTitle}</h3>
          <div className="flex space-x-2 text-gray-600">
            <FaEdit className="cursor-pointer hover:text-blue-500" title="Edit" />
            <FaTrash className="cursor-pointer hover:text-red-500" title="Delete" onClick={deletePromoHandler} />
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
