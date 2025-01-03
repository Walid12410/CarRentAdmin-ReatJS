import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import InputComponent from "../../../components/InputComponent";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import EmployeeSideBar from "../../../components/Employee-Components/EmployeeSidebar";
import { changePromoImage ,updatePromo } from "../../../redux/api/promoApiCall";
import { toast } from "react-toastify";

const EditPromo = () => {

    const naviage = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { promo } = location.state;

    const { isPromoImageChanged, loadingPromoImage , isPromoUpdated , loadingPromoUpdated } = useSelector(state => state.promo);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [promoCode, setPromoCode] = useState(promo?.promoCode || "");
    const [discountPercent, setDiscountPercent] = useState(promo?.discountPercentage || null);
    const [startDate, setStartDate] = useState(promo?.startDate || "");
    const [endDate, setEndDate] = useState(promo?.endDate || "");
    const [usageLimit, setUsageLimit] = useState(promo?.usageLimit || null);
    const [promoTitle, setPromoTitle] = useState(promo?.promoTitle || "");
    const [promoDesc, setPromoDesc] = useState(promo?.promoDescription || "");
    const [promoImage, setPromoImage] = useState(promo?.promoImage?.url ?? "");

    const [fileSelected, setFileSelected] = useState(null);

    const handlePromoImageChange = async () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";

        fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("image", file);

                setFileSelected(file);

                // call api
                dispatch(changePromoImage(promo._id, formData));
            }
        };

        fileInput.click();
    };

    useEffect(() => {
        if (isPromoImageChanged) {
            naviage("/employee/promo-page");
        }
    }, [isPromoImageChanged]);


    const formSubmitHandler = (e) => {
        e.preventDefault();

        // validation for empty variable 
        if (promoCode.trim() === "") return toast.error("Promo code is required");
        if (discountPercent === null) return toast.error("Discount percent is required");
        if (startDate.trim() === "") return toast.error("Start date is required");
        if (endDate.trim() === null) return toast.error("End date is required");
        if (usageLimit === "") return toast.error("Usage limit is required");
        if (promoTitle.trim() === "") return toast.error("Promo title is required");
        if (promoDesc.trim() === "") return toast.error("Promo description status is required");


        // make all variables in object
        const updatePromoObject = {
            "promoCode": promoCode,
            "discountPercentage": discountPercent,
            "startDate": startDate,
            "endDate": endDate,
            "usageLimit": usageLimit,
            "promoTitle": promoTitle,
            "promoDescription": promoDesc,
        }

        // call api
        dispatch(updatePromo(promo._id, updatePromoObject));

    }

    useEffect(()=>{
        if(isPromoUpdated) {
            naviage("/employee/promo-page");
        }
    },[isPromoUpdated]);

    return (
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
                <EmployeeHeader
                    sidebarToggle={setSidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="flex flex-col items-center bg-gray-100 min-h-screen py-6">
                    {/* Promo Image Section */}
                    <div className="w-11/12 max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-6">
                        <div className="flex flex-col items-center">
                            <img
                                src={fileSelected ? URL.createObjectURL(fileSelected) : promoImage} // Default image if none is set
                                alt="Promo"
                                className="w-50 h-50 object-cover mb-4"
                            />
                            <button
                                className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                                onClick={() => handlePromoImageChange()}
                            >
                                {loadingPromoImage ? "Change..." : "Change Promo Image"}
                            </button>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-11/12 max-w-4xl bg-white shadow-lg rounded-lg p-6">
                        <div className="text-3xl font-bold text-center mb-6">Promo fields</div>
                        <form className="space-y-6" onSubmit={formSubmitHandler}>
                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"Promo title"}
                                    type={"text"}
                                    value={promoTitle}
                                    onChange={(e) => setPromoTitle(e.target.value)}
                                    idName={"promoTitle"}
                                />
                                <InputComponent
                                    label={"Promo description"}
                                    type={"text"}
                                    value={promoDesc}
                                    onChange={(e) => setPromoDesc(e.target.value)}
                                    idName={"promoDesc"}
                                />
                                <InputComponent
                                    label={"Promo code"}
                                    type={"text"}
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    idName={"promoCode"}
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"Discount percentage"}
                                    type={"number"}
                                    value={discountPercent}
                                    onChange={(e) => setDiscountPercent(e.target.value)}
                                    idName={"discountPercentage"}
                                />
                                <InputComponent
                                    label={"Usage limit"}
                                    type={"number"}
                                    value={usageLimit}
                                    onChange={(e) => setUsageLimit(e.target.value)}
                                    idName={"usageLimit"}
                                />
                                <InputComponent
                                    label={"Start date"}
                                    type={"date"}
                                    value={new Date(startDate).toISOString().split("T")[0]}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    idName={"startDate"}
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <InputComponent
                                    label={"End date"}
                                    type={"date"}
                                    value={new Date(endDate).toISOString().split("T")[0]}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    idName={"endDate"}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                            >
                                {loadingPromoUpdated ? "Updating..." :"Update promo fields"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditPromo;