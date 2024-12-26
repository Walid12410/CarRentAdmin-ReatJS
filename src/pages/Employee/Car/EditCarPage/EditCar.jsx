import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarMake } from "../../../../redux/api/carMakeApi";
import { fetchCategory } from "../../../../redux/api/categoryApiCall";
import { toast } from "react-toastify";
import { UpdateCar } from "../../../../redux/api/carApiCall";
import { useLocation, useNavigate } from "react-router-dom";

const EditCar = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { car } = location.state; 

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { carMake, loadingCarMake, errorCarMake } = useSelector(state => state.carMake);
    const { categories, loading, error } = useSelector(state => state.category);
    const { isCarUpdated, loadingUpdateCar } = useSelector(state => state.car);


    // All object data
    const [carMakeId, setCarMakeId] = useState(car?.carMakeId || null);
    const [carModel, setCarModel] = useState(car?.carModel || "");
    const [categoryId, setCategoryId] = useState(car?.categoryId || null);
    const [year, setYear] = useState(car?.year || "");
    const [color, setColor] = useState(car?.color || "");
    const [carStatus, setCarStatus] = useState(car?.carStatus || "");
    const [licensePlate, setLicensePlate] = useState(car?.licensePlate || "");
    const [mileage, setMileage] = useState(car?.mileage || "");
    const [fuelType, setFuelType] = useState(car?.fuelType || "");
    const [transmission, setTransmission] = useState(car?.transmission || "");
    const [rentPrice, setRentPrice] = useState(car?.rentPrice || "");


    useEffect(() => {
        dispatch(fetchCarMake());
        dispatch(fetchCategory())
    }, [dispatch]);


    const formSubmitHandler = (e) => {
        e.preventDefault();

        // validation for empty variable 
        if (carMakeId === null) return toast.error("Car make is required");
        if (categoryId === null) return toast.error("Category is required");
        if (carModel.trim() === "") return toast.error("Car model is required");
        if (year.trim() === "") return toast.error("Year is required");
        if (color.trim() === "") return toast.error("Color is required");
        if (rentPrice.trim() === "") return toast.error("Rent price is required");
        if (carStatus.trim() === "") return toast.error("Car status is required");
        if (transmission.trim() === "") return toast.error("Transmission is required");
        if (mileage.trim() === "") return toast.error("Mileage is required");
        if (licensePlate.trim() === "") return toast.error("License plate is required");
        if (fuelType.trim() === "") return toast.error("Fuel type is required");
        if(car._id === null) return toast.error("Something went wrong")

        
        // make all variables in object
        const updatedCar = {
            "carMakeId": carMakeId,
            "carModel": carModel,
            "categoryId": categoryId,
            "year": year,
            "color": color,
            "carStatus": carStatus,
            "licensePlate": licensePlate,
            "mileage": mileage,
            "fuelType": fuelType,
            "transmission": transmission,
            "rentPrice": rentPrice,
        }

        dispatch(UpdateCar(car._id,updatedCar))
    }


    useEffect(()=> {
        if(isCarUpdated){
            navigate("/employee/car-page");
        }
    },[isCarUpdated,navigate]);


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
                            Update Car
                        </div>
                        <form className="space-y-6" onSubmit={formSubmitHandler}>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="carModel" className="text-sm font-medium mb-1">
                                        Car Model
                                    </label>
                                    <input
                                        type="text"
                                        id="carModel"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full"
                                        value={carModel}
                                        onChange={(e) => setCarModel(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="year" className="text-sm font-medium mb-1">
                                        Year
                                    </label>
                                    <input
                                        type="number"
                                        id="year"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="color" className="text-sm font-medium mb-1">
                                        Color
                                    </label>
                                    <input
                                        type="text"
                                        id="color"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="status" className="text-sm font-medium mb-1">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full bg-white"
                                        value={carStatus}
                                        onChange={(e) => setCarStatus(e.target.value)}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Available">Available</option>
                                        <option value="Rented">Rented</option>
                                        <option value="Maintance">Maintance</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="licensePlate" className="text-sm font-medium mb-1">
                                        License Plate
                                    </label>
                                    <input
                                        type="text"
                                        id="licensePlate"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full"
                                        value={licensePlate}
                                        onChange={(e) => setLicensePlate(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="mileage" className="text-sm font-medium mb-1">
                                        Mileage
                                    </label>
                                    <input
                                        type="text"
                                        id="mileage"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full"
                                        value={mileage}
                                        onChange={(e) => setMileage(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="fuelType" className="text-sm font-medium mb-1">
                                        Fuel Type
                                    </label>
                                    <select
                                        id="fuelType"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full bg-white"
                                        value={fuelType}
                                        onChange={(e) => setFuelType(e.target.value)}
                                    >
                                        <option value="">Select Fuel Type</option>
                                        <option value="Gasoline">Gasoline</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Electric">Electric</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="transmission" className="text-sm font-medium mb-1">
                                        Transmission
                                    </label>
                                    <select
                                        id="transmission"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full bg-white"
                                        value={transmission}
                                        onChange={(e) => setTransmission(e.target.value)}
                                    >
                                        <option value="">Select Transmission</option>
                                        <option value="Automatic">Automatic</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="rentPrice" className="text-sm font-medium mb-1">
                                        Rent Price $/day
                                    </label>
                                    <input
                                        type="number"
                                        id="rentPrice"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full"
                                        value={rentPrice} onChange={(e) => setRentPrice(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="carMake" className="text-sm font-medium mb-1">
                                        Car Make
                                    </label>
                                    <select
                                        id="carMake"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full bg-white"
                                        value={carMakeId} onChange={(e) => setCarMakeId(e.target.value)}
                                    >
                                        <option value="">Select Car Make</option>
                                        {
                                            loadingCarMake ? (
                                                <p>Loading...</p>
                                            ) : errorCarMake ? (
                                                <p>Error fetching car make</p>
                                            ) : carMake && carMake.length > 0 ? (
                                                carMake.map((carMakeList) => (
                                                    <option key={carMakeList._id} value={carMakeList?._id}>
                                                        {carMakeList?.carMakeName}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="">Please add a car make before adding an car</option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="category" className="text-sm font-medium mb-1">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        className="rounded-lg border border-gray-300 p-2.5 w-full bg-white"
                                        value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
                                    >
                                        <option value="">Select Category</option>
                                        {
                                            loading ? (
                                                <p>Loading...</p>
                                            ) : error ? (
                                                <p>Error fetching category</p>
                                            ) : categories && categories.length > 0 ? (
                                                categories.map((category) => (
                                                    <option key={category._id} value={category?._id}>
                                                        {category?.categoryName}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="">no category added yet</option>
                                            )
                                        }
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                            >
                               {loadingUpdateCar ? "Loading..." : "Update car"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCar;
