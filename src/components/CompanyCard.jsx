import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // You can use any icon library
import { useDispatch } from "react-redux";

const CompanyCard = ({ company }) => {
  const dispatch = useDispatch();

  const handleDelete = (companyId) => {
    console.log("gelelele");
  };

  return (
    <div className="flex flex-col w-full p-4 border rounded-lg shadow-md h-full">
      {/* Company Image */}
      <div className="w-full h-52 bg-gray-200 rounded-md mb-4">
        <img
          src={company?.imageCompany[0]?.image?.url}
          alt="Company"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Company Details */}
      <div className="flex flex-col space-y-2 mb-4">
        <h3 className="text-xl font-semibold">{company?.companyName}</h3>
        <p className="text-sm text-gray-600">{company?.companyEmail}</p>
        <p className="text-sm text-gray-600">{company?.companyPhoneNumber}</p>
        <p className="text-sm text-gray-600">{company?.carCount} Cars</p>


        {/* Direct Location Link */}
        {company?.latitude && company?.longitude && (
          <a
            href={`https://www.google.com/maps?q=${company?.latitude},${company?.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2"
          >
            View Location on Map
          </a>
        )}

      </div>

      {/* Delete Icon */}
      <div className="mt-auto flex justify-end">
        <button
          className="text-red-500"
          onClick={() => handleDelete(company?.id)}
        >
          <FaTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};



export default CompanyCard;

