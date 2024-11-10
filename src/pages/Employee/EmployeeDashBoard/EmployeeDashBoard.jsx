import EmployeeMainePage from "./EmployeeMain";
import EmployeeSideBar from "../../../components/Employee-Components/SideBar-Employee";
import { useState } from "react";

const EmployeeDashBoard = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div className="flex">
            <EmployeeSideBar sidebarToggle={sidebarToggle} />
            <EmployeeMainePage
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
        </div>
    );
}

export default EmployeeDashBoard;