import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createNewPromo } from "../../../redux/api/promoApiCall";
import InputComponent from "../../../components/InputComponent";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import { sendNotificationForAllUser } from "../../../redux/api/notificationApiCall";

const AddNewPromo = () => {
    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);
    const { isPromoCreated, loadingPromoCreated } = useSelector(state => state.promo);
    // Image array
    const [images, setImages] = useState([]); // State to manage uploaded images

    // All object data
    const [promoCode, setPromoCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [usageLimit, setUsageLimit] = useState("");
    const [promoTitle, setPromoTitle] = useState("");
    const [promoDesc, setPromoDesc] = useState("");

    // Handle image input
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 1) {
            alert("You can only upload a maximum of 1 images.");
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

        if (promoTitle === "") return toast.error("promo title is required");
        if (promoDesc === "") return toast.error("promo description is required");
        if (promoCode === "") return toast.error("promo code is required");
        if (startDate === "") return toast.error("start date is required");
        if (endDate === "") return toast.error("end date is required");
        if (usageLimit === "") return toast.error("usage limit is required");

        const formData = new FormData();
        formData.append("promoTitle", promoTitle);
        formData.append("promoDescription", promoDesc);
        formData.append("promoCode", promoCode);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("usageLimit", usageLimit);
        formData.append("discountPercentage", discountPercent);
        formData.append("usedCount", 0)

        // Append images (if any)
        images.forEach((image) => {
            formData.append(`image`, image); // Assign a unique key for each image
        });

        console.log(formData);
        dispatch(createNewPromo(formData));
    }

    const navigate = useNavigate();

    useEffect(() => {
        if (isPromoCreated) {
            dispatch(sendNotificationForAllUser("New promo available", promoTitle));
            navigate("/employee/promo-page");
        }
    }, [isPromoCreated, navigate]);

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
                            Add new promo
                        </div>
                        <form className="space-y-6" onSubmit={formSubmitHandler}>
                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"Promo title"} type={"text"} value={promoTitle}
                                    onChange={(e) => setPromoTitle(e.target.value)}
                                    idName={"promoTitle"}
                                />
                                <InputComponent
                                    label={"Promo description"} type={"text"} value={promoDesc}
                                    onChange={(e) => setPromoDesc(e.target.value)} idName={"promoDesc"}
                                />
                                <InputComponent
                                    label={"Promo code"} type={"text"} value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)} idName={"promoCode"}
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"Discount percentage"} type={"number"} value={discountPercent}
                                    onChange={(e) => setDiscountPercent(e.target.value)}
                                    idName={"discountPercentage"}
                                />
                                <InputComponent
                                    label={"Usage limit"} type={"number"} value={usageLimit}
                                    onChange={(e) => setUsageLimit(e.target.value)}
                                    idName={"usageLimit"}
                                />
                                <InputComponent
                                    label={"Start date"} type={"date"} value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    idName={"startDate"}
                                />
                            </div>


                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"End date"} type={"date"} value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)} idName={"endDate"}
                                />
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium mb-2">
                                    Upload Images (Max: 1)
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
                                            Selected Image:
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
                                {loadingPromoCreated ? "Creating..." : "Create new promo"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewPromo;
