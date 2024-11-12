import { useState } from "react";
import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader";
import EmployeeSideBar from "../../../components/Employee-Components/SideBar-Employee";

const CarPage = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? " " : " ml-64 "} w-full`}>
                <EmployeeHeader
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
                <div className="text-ms font-bold text-white w-44 h-10 bg-gray-800 hover:bg-gray-700 cursor-pointer	 m-2 text-center p-2">
                    New Car
                </div>

            </div>
        </div>
    );
}

export default CarPage;