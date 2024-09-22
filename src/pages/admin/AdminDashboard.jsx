import AdminSideBar from "../../components/sideBar/SideBar";
import "./admin.css";
import AdminMain from "./AdminMain/AdminMainPage";



const AdminDashboard = () => {
    return ( 
        <section className="admin-dashboard">
            <AdminSideBar/>
            <AdminMain />
        </section>
    );
}
 
export default AdminDashboard;