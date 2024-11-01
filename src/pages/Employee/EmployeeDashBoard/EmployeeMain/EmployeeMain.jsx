import EmployeeHeader from "../../../../components/Employee-Components/header-employee/EmployeeHeader"
import EmployeeDashBoardCard from "../DashboardResult/DashboardCard";
import "../employee-main.css";
import CompanyStatic from "../Static/CompanyStatic";


const EmployeeMainePage = () => {
    return (
        <div className="employee-main">
            <EmployeeHeader />
            <EmployeeDashBoardCard />
            <CompanyStatic />
        </div>
    );
}

export default EmployeeMainePage;