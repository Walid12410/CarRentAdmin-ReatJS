import { useEffect, useState } from "react";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import { useDispatch, useSelector } from "react-redux";


const PromoAdmin = () => {

    const dispatch = useDispatch();

    const [sidebarToggle, setSidebarToggle] = useState(false);


    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}>

                {/* Header */}
                <AdminHeader setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />
            </div>
        </div>
    );
}

export default PromoAdmin;