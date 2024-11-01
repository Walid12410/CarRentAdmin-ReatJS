import AdminSideBar from "../../../components/Admin-Components/sideBar/SideBar";
import "../admin.css";
import AdminMain from "../AdminDashBoard/AdminMain/main-dashboard/AdminMainPage";


const AdminDashboard = () => {
    return ( 
        <section className="admin-dashboard">
            <AdminSideBar/>
            <AdminMain />
        </section>
    );
}
 
export default AdminDashboard;