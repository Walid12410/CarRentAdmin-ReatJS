import AdminDashBoardCard from "../AdminDashBoard/AdminDashboard";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin"

const AdminMain = ({sidebarToggle, setSidebarToggle}) => {
    return (
        <div className={`${sidebarToggle ? " " : " ml-64 "} w-full`}>
            <AdminHeader
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
            <AdminDashBoardCard />
        </div>
    );
}
 
export default AdminMain;