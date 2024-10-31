import AdminHeader from "../../../../components/Admin-Components/header/HeaderAdmin";
import "./admin-main.css";
import AdminDashBoardCard from "./dashBoard-Card/adminDashBoardCard";
import LatestCar from "./LatestCar/LatestCar";


const AdminMain = () => {
    return (  
        <div className="admin-main">
            <AdminHeader />
            < AdminDashBoardCard />
            <LatestCar />
        </div>
    );
}
 
export default AdminMain;