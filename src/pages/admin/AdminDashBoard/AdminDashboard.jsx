import { useState } from "react";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import AdminMain from "../AdminDashBoard/AdminMainPage";


const AdminDashboard = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            {/* <AdminMain
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            /> */}
        </div>
    );
}
 
export default AdminDashboard;