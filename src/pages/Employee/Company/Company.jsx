import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { changeCompanyImage, fetchOneCompany, updateCompany } from "../../../redux/api/companyApiCall";
import { toast } from "react-toastify";

const CompanyPage = () => {
    const dispatch = useDispatch();

    const { company, loadingOneCompany, isCompanyUpdated,
        loadingCompanyUpdated, loadingCompanyImageChange, isCompanyImageChange
    } = useSelector(state => state.company);
    const [sidebarToggle, setSidebarToggle] = useState(false);

    useEffect(() => {
        // Fetch company data when the component mounts
        dispatch(fetchOneCompany());
    }, [dispatch]);


    const [companyEmail, setCompanyEmail] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");

    const [selectedFiles, setSelectedFiles] = useState({});

    useEffect(() => {
        if (company) {
            setCompanyEmail(company.companyEmail || "");
            setCompanyCountry(company.country || "");
            setCompanyAddress(company.address || "");
            setCompanyCity(company.city || "");
            setCompanyPhoneNumber(company.companyPhoneNumber || "");
        }
    }, [company]);


    // change image handler
    const handleCompanyImageChange = async (CompanyImageId) => {
        if (loadingCompanyImageChange) return;

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";

        fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("image", file);

                setSelectedFiles((prevState) => ({
                    ...prevState,
                    [CompanyImageId]: file, // Map the file to the specific CompanyImageId
                }));

                // Call the API
                dispatch(changeCompanyImage(CompanyImageId, formData));
            }
        };

        fileInput.click();
    };

    useEffect(() => {
        if (isCompanyImageChange) {
            dispatch(fetchOneCompany());
        }
    }, [isCompanyImageChange]);

    const isFormValid = () => {
        return (
            companyEmail.trim() !== "" &&
            companyCountry.trim() !== "" &&
            companyAddress.trim() !== "" &&
            companyCity.trim() !== "" &&
            companyPhoneNumber.trim() !== ""
        );
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (loadingCompanyUpdated) return;


        // validation for empty variable
        if (!isFormValid()) {
            return toast.error("Some fields cannot be empty!");
        }

        const updateCompanyObject = {
            companyEmail,
            companyPhoneNumber,
            address: companyAddress,
            city: companyCity,
            country: companyCountry
        }

        dispatch(updateCompany(updateCompanyObject));
    }

    useEffect(() => {
        if (isCompanyUpdated) {
            dispatch(fetchOneCompany());
        }
    }, [isCompanyUpdated]);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <EmployeeSideBar sidebarToggle={sidebarToggle} />

            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col`}>
                {/* Header */}
                <EmployeeHeader setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />

                {loadingOneCompany ? (
                    <div className="loading-spinner">
                    </div>
                ) : company === null ? (
                    <div className="error-message"> Error fetching company data</div>
                ) : (
                    <div className="flex-grow flex flex-col p-4">
                        {/* Company Info */}
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">{company?.companyName}</h1>
                            <p className="text-lg">{company?.address}</p>
                            <p className="text-lg">{company?.city}, {company?.country}</p>
                        </div>

                        {/* Image Gallery */}
                        <div className="flex space-x-4 mt-4">
                            {Array.isArray(company?.imageCompany) && company?.imageCompany.length > 0 ? (
                                company.imageCompany.map((image, index) => (
                                    <div key={index} className="relative w-52 h-52">
                                        <img
                                            src={
                                                selectedFiles[image._id]
                                                    ? URL.createObjectURL(selectedFiles[image._id])
                                                    : image.image.url
                                            }
                                            alt={`Company Image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        {image.isDefaultImage && (
                                            <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-full">
                                                Default image
                                            </div>
                                        )}
                                        <button
                                            className="absolute top-2 right-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-full"
                                            onClick={() => handleCompanyImageChange(image._id)}
                                        >
                                            {loadingCompanyImageChange ? "Changing..." : "Change image"}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No images available</p>
                            )}
                        </div>

                        {/* Company Details Form */}
                        <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-xl font-semibold mb-4">Update Company Information</h2>
                            <form className="space-y-4" onSubmit={formSubmitHandler}>
                                <div>
                                    <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="companyEmail"
                                        type="email"
                                        value={companyEmail}
                                        onChange={(e) => setCompanyEmail(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyPhoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        id="companyPhoneNumber"
                                        type="number"
                                        value={companyPhoneNumber}
                                        onChange={(e) => setCompanyPhoneNumber(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input
                                        id="companyAddress"
                                        type="text"
                                        value={companyAddress}
                                        onChange={(e) => setCompanyAddress(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyCity" className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        id="companyCity"
                                        type="text"
                                        value={companyCity}
                                        onChange={(e) => setCompanyCity(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="companyCountry" className="block text-sm font-medium text-gray-700">Country</label>
                                    <input
                                        id="companyCountry"
                                        type="text"
                                        value={companyCountry}
                                        onChange={(e) => setCompanyCountry(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                                >
                                    {loadingCompanyUpdated ? "Updating..." : "Update Information"}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyPage;
