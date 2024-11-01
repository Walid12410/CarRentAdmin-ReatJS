import "./header.css";
import { ReactComponent as NotificationIcon } from '../../../assets/admin-icon/notification-alert-icon.svg'
import { ReactComponent as LogOutIcon } from '../../../assets/admin-icon/enter-icon.svg';
import { ReactComponent as PersonIcon } from '../../../assets/admin-icon/person-circle.svg';
import { useState } from "react";
import { Link } from "react-router-dom";


const EmployeeHeader = () => {

    const [dropdown , setDropDown] = useState(false);

    return (  
        <div className="employee-header">
        <div className="employee-header-title">Employee Dashboard</div>
        <div className="employee-header-icons">
            <div className="employee-notification-icon">
                <NotificationIcon width="20" height="20" fill="white" />
            </div>
            <div className="employee-profile-icon">
                <img onClick={()=> setDropDown(prev => !prev)} src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="Profile" className="profile-circle" />
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
 
export default EmployeeHeader;