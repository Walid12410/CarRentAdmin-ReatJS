import { useEffect, useState } from "react";
import EmployeeSideBar from "../../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../../components/Employee-Components/EmployeeHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarMake } from "../../../../redux/api/carMakeApi";
import { fetchCategory } from "../../../../redux/api/categoryApiCall";
import { toast } from "react-toastify";
import { CreateNewCar } from "../../../../redux/api/carApiCall";
import { useNavigate } from "react-router-dom";

const AddNewCar = () => {
    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { carMake, loadingCarMake, errorCarMake } = useSelector(state => state.carMake);
    const { categories, loading, error } = useSelector(state => state.category);
    const { isCarCreated, loadingCarCreate } = useSelector(state => state.car);

    // Image array
    const [images, setImages] = useState([]); // State to manage uploaded images

    // All object data
    const [carMakeId, setCarMakeId] = useState(null);
    const [carModel, setCarModel] = useState("");
    const [categoryId, setCategoryId] = useState(null);
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [carStatus, setCarStatus] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [mileage, setMileage] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [rentPrice, setRentPrice] = useState("");




    useEffect(() => {
        dispatch(fetchCarMake());
        dispatch(fetchCategory())
    }, [dispatch]);

    // Handle image input
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 3) {
            alert("You can only upload a maximum of 3 images.");
            return;
        }

        // Filter only valid image files
        const validImages = files.filter(file => file.type.startsWith("image/"));
        if (validImages.length !== files.length) {
            alert("Please upload only image files.");
            return;
        }

        setImages(prevImages => [...prevImages, ...validImages]);
    };

    // Remove an image
    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };


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
        if(images.length === 0) return toast.error("Image is required");


        // make all variable in object
        const newCar = {
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

        // Create a new FormData object
        const formData = new FormData();

        // Append images to FormData
        images.forEach((image) => {
            formData.append("carImages", image); // Use a unique key for each image
        });

        dispatch(CreateNewCar(newCar,formData));
    }

    const navigate = useNavigate();

    useEffect(()=> {
        if(isCarCreated) {
            navigate("/employee/car-page");
        }
    }, [isCarCreated , navigate]);

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
                            Add New Car
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
                            <div className="mt-6">
                                <label className="block text-sm font-medium mb-2">
                                    Upload Images (Max: 3)
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                                />
                                {images.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-sm font-medium mb-2">
                                            Selected Images:
                                        </p>
                                        <div className="grid grid-cols-3 gap-4">
                                            {images.map((image, index) => (
                                                <div key={index} className="relative">
                                                    <img
                                                        src={URL.createObjectURL(image)}
                                                        alt={`Selected ${index}`}
                                                        className="w-full h-24 object-cover rounded"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                            >
                               {loadingCarCreate ? "Loading..." : "Create new car"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewCar;
