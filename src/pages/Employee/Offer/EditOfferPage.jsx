import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateOffer } from "../../../redux/api/offerApiCall";
import { toast } from "react-toastify";
import InputComponent from "../../../components/InputComponent";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import request from "../../../utils/requset";

const EditOfferPage = () => {

    const location = useLocation();
    const { offer } = location.state;

    const dispatch = useDispatch();
    const [sidebarToggle, setSidebarToggle] = useState(false);

    // All object data
    const [cars, setCars] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [carModel, setCarModel] = useState(offer?.car.carModel || "");
    const [carId, setCarId] = useState(offer?.carId || null);
    const [offerTitle, setOfferTitle] = useState(offer?.offerTitle || "");
    const [startDate, setStartDate] = useState(offer?.startDate || "");
    const [endDate, setEndDate] = useState(offer?.endDate || "");
    const [discountPrice, setDiscountPrice] = useState(offer?.discountPrice || "");
    const companyId = useSelector((state) => state.auth.employee.companyID); // Accessing state from Redux

    const { isOfferUpdated, loadingOfferUpdated } = useSelector((state) => state.offer);
    const dropdownRef = useRef(null); // Reference for dropdown
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (loadingOfferUpdated) return;

        if (carId == null) return toast.error("car is required");
        if (offerTitle === "") return toast.error("offer title is required");
        if (startDate === "") return toast.error("start date is required");
        if (endDate === "") return toast.error("end date is required");
        if (discountPrice === "") return toast.error("discount price is required");

        const updateOfferObject = {
            "carId": carId,
            "offerTitle": offerTitle,
            "startDate": startDate,
            "endDate": endDate,
            "discountPrice": discountPrice
        }

        dispatch(updateOffer(offer._id, updateOfferObject));
    };

    // handler search input change
    const handlerInputChange = (e) => {
        setCarModel(e.target.value);
        setIsDropdownVisible(true); // Show dropdown when typing starts
    };

    // call the search API 
    useEffect(() => {
        const body = {
            carModel: carModel,
            companyId: companyId,
        };
        const fetchData = async () => {
            if (carModel.trim() === "") {
                setCars([]);
                return;
            }
            setSearchLoading(true);
            try {
                const response = await request.post("/api/car-rent/search", body, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.data.success === true) {
                    setCars(response.data.data);
                }
            } catch (error) {
                toast.error("Error fetch car");
                setCars([]);
            } finally {
                setSearchLoading(false);
            }
        };

        // Add debounce to limit API calls
        const delayDebounceFn = setTimeout(() => {
            fetchData();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [carModel]);

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false); // Close dropdown when clicking outside
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        if (isOfferUpdated) {
            navigate("/employee/offer-page");
        }
    }, [isOfferUpdated, navigate]);

    return (
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
                <EmployeeHeader
                    sidebarToggle={setSidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="w-11/12 max-w-4xl bg-white shadow-lg rounded-lg p-6">
                        <div className="text-3xl font-bold text-center mb-6">
                            Update offer
                        </div>
                        <form className="space-y-6" onSubmit={formSubmitHandler}>
                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"Start Date"} type={"date"} value={new Date(startDate).toISOString().split("T")[0]}
                                    onChange={(e) => setStartDate(e.target.value)} idName={"startDate"}
                                />
                                <InputComponent
                                    label={"End Date"} type={"date"} value={new Date(endDate).toISOString().split("T")[0]}
                                    onChange={(e) => setEndDate(e.target.value)} idName={"endDate"}
                                />
                                <InputComponent
                                    label={"Offer Title"} type={"text"} value={offerTitle}
                                    onChange={(e) => setOfferTitle(e.target.value)} idName={"offerTitle"}
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"Discount price $ / day"} type={"number"} value={discountPrice}
                                    onChange={(e) => setDiscountPrice(e.target.value)} idName={"discountPrice"}
                                />
                                <div className="relative">
                                    <InputComponent
                                        label={"Car"} type={"text"} value={carModel} onChange={handlerInputChange}
                                        idName={"carModel"}
                                    />
                                    {isDropdownVisible && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                                            style={{
                                                maxHeight: '200px', // Set maximum height
                                                overflowY: 'auto', // Enable scrolling
                                            }}
                                        >
                                            {searchLoading ? (
                                                <p className="text-center text-gray-500 p-2">Loading...</p>
                                            ) : cars.length > 0 ? (
                                                cars.map((car) => (
                                                    <div
                                                        key={car._id}
                                                        onClick={() => {
                                                            setCarModel(car.carModel);
                                                            setCarId(car._id);
                                                            setIsDropdownVisible(false); // Close dropdown after selecting car
                                                        }}
                                                        className="cursor-pointer hover:bg-gray-100 p-2"
                                                    >
                                                        <div className="flex items-center">
                                                            {/* First Image (small) */}
                                                            <img
                                                                src={car.CarImage[0]?.carImage?.url}
                                                                alt={car.carModel}
                                                                className="w-16 h-16 object-cover mr-2" // Small image styling
                                                            />
                                                            <div className="flex flex-col ml-2">
                                                                <div className="text-sm font-semibold mb-2">
                                                                    {car.carModel} - {car.year}
                                                                </div>
                                                                <div className="text-sm font-semibold mb-2">
                                                                    {car.rentPrice} day / $
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center text-gray-500 p-2">No cars found.</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                            >
                                {loadingOfferUpdated ? "Updating..." : "Update offer"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditOfferPage;