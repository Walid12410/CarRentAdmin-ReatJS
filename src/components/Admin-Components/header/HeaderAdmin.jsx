import "./header.css";
import { ReactComponent as NotificationIcon } from '../../../assets/admin-icon/notification-alert-icon.svg'
import { ReactComponent as LogOutIcon } from '../../../assets/admin-icon/enter-icon.svg';
import { ReactComponent as PersonIcon } from '../../../assets/admin-icon/person-circle.svg';
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";



const AdminHeader = () => {

    const user = useSelector((state)=> state.auth.user);


    const [dropdown , setDropDown] = useState(false);


    return (  
        <div className="admin-header">
        <div className="admin-header-title">Admin Dashboard</div>
        <div className="admin-header-icons">
            <div className="admin-notification-icon">
                <NotificationIcon width="20" height="20" fill="white" />
            </div>
            <div className="admin-profile-icon">
                <img onClick={()=> setDropDown(prev => !prev)} src={user?.profilePhoto.url} alt="Profile" className="profile-circle" />
                {dropdown && (
                    <div className="header-right-dropdown">
                        <Link onClick={()=> setDropDown(false)}
                        className="header-dropdown-item">
                        <PersonIcon width="20" height="20" fill="black" />
                            <span>Profile</span>
                        </Link>
                        <div className="header-dropdown-item">
                        <LogOutIcon width="20" height="20" fill="black" />
                            <span>Logout</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    );
}
 
export default AdminHeader;