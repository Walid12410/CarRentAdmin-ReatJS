import { useEffect, useState } from "react";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../../../redux/api/companyApiCall";

const AddCompanyAdmin = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const {isCompanyCreated,loadingCreateCompany} = useSelector(state => state.company);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // States for the form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [isDefaultImage, setIsDefaultImage] = useState("image1");


    // Validation function
    const validateForm = () => {
        if (!name || !email || !number || !country || !address || !city || !longitude || !latitude || !image1) {
            alert("All fields are required, including the images.");
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(loadingCreateCompany) return;

        if (!validateForm()) {
            return; // If validation fails, stop form submission
        }


        const companyData = {
            'companyName': name,
            'companyEmail': email,
            'companyPhoneNumber': number,
            'country': country,
            'address': address,
            'city': city,
            'longitude': longitude,
            'latitude': latitude,
        };

        // Dispatch the createCompany action
        dispatch(createCompany(companyData, image1, image2,isDefaultImage));

    };


    useEffect(()=>{
        if(isCompanyCreated){
            navigate('/admin/company-page');
        }
    },[isCompanyCreated]);

    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
                <AdminHeader
                    sidebarToggle={setSidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="flex justify-center items-center min-h-screen">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="text-xl font-bold mb-6 text-center">Add Company</h2>

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter company name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter phone number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Country */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="Enter country"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* City */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter city"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Longitude */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Longitude</label>
                            <input
                                type="number"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                                placeholder="Enter longitude"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Latitude */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Latitude</label>
                            <input
                                type="number"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                placeholder="Enter latitude"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Image 1 */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Image 1</label>
                            <input
                                type="file"
                                onChange={(e) => setImage1(e.target.files[0])}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Image 2</label>
                            <input
                                type="file"
                                onChange={(e) => setImage2(e.target.files[0])}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            />
                        </div>

                        {/* Default Image Selection */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Select Default Image</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        value="image1"
                                        checked={isDefaultImage === "image1"}
                                        onChange={(e) => setIsDefaultImage(e.target.value)}
                                    />
                                    <span>Image 1</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        value="image2"
                                        checked={isDefaultImage === "image2"}
                                        onChange={(e) => setIsDefaultImage(e.target.value)}
                                    />
                                    <span>Image 2</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                {loadingCreateCompany ? "Adding..." : "Add Company" }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCompanyAdmin;
