import "./admin.css";
import AdminMain from "./AdminMain/AdminMainPage";
import AdminSideBar from "./sideBar/SideBar";


const AdminDashboard = () => {
    return ( 
        <section className="admin-dashboard">
            <AdminSideBar/>
            <AdminMain />
        </section>
    );
}
 
export default AdminDashboard;