import EmployeeHeader from "../../../components/Employee-Components/EmployeeHeader"
import EmployeeDashBoardCard from "./DashboardCard";
import CompanyStatic from "./CompanyStatic";


const EmployeeMainePage = ({ sidebarToggle, setSidebarToggle }) => {
    return (
        <div className={`${sidebarToggle ? " " : " ml-64 "} w-full`}>
            <EmployeeHeader
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
            <EmployeeDashBoardCard />
            <CompanyStatic />
        </div>
    );
}

export default EmployeeMainePage;