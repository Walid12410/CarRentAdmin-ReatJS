import {  FaUserCircle, FaBars } from "react-icons/fa"

const EmployeeHeader = ({ sidebarToggle, setSidebarToggle }) => {

    return (
        <nav className="bg-gray-800 px-4 py-3 flex justify-between">
            <div className="flex items-center text-x1">
                <FaBars
                    className="text-white me-4 cursor-pointer"
                    onClick={() => setSidebarToggle(!sidebarToggle)}
                />
                <span className="text-white font-semibold">Employee DashBoard</span>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className="w-6 h-6 mt-1" />
                        <div className="z-10 hidden absolute rounded-lg shadow w-48 group-focus:block top-full right-0 bg-white">
                            <ul className="py-2 text-sm text-gray-950 text-center">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 no-underline">Change password</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 no-underline">Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default EmployeeHeader;