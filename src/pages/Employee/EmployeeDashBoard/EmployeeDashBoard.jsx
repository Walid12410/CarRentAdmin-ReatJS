import EmployeeSideBar from "../../../components/Employee-Components/sideBar-employee/SideBar-Employee";
import EmployeeMainePage from "./EmployeeMain/EmployeeMain";
import "../employee.css";


const EmployeeDashBoard = () => {
    return ( 
        <section className="employee-dashboard">
            <EmployeeSideBar />
            <EmployeeMainePage />
        </section>
      );
}
 
export default EmployeeDashBoard;