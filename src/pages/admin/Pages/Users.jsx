import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../../components/Admin-Components/AdminSideBar";
import { useEffect, useState } from "react";
import { countUser, fetchUsers } from "../../../redux/api/userApiCall";
import Pagination from "../../../components/Pagination";
import AdminHeader from "../../../components/Admin-Components/HeaderAdmin";
import TableUser from "../../../components/Table";
import InputComponent from "../../../components/InputComponent";

const USERS_PER_PAGE = 10;

const User = () => {
    const dispatch = useDispatch();
    const { loadingUsers, users, errorUsers, usersCount } = useSelector(state => state.user);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(usersCount / USERS_PER_PAGE);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        dispatch(fetchUsers(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countUser());
    }, [dispatch]);

    return (
        <div className="flex">
            <AdminSideBar sidebarToggle={sidebarToggle} />
            <div className={`${sidebarToggle ? "" : "ml-64"} w-full flex flex-col min-h-screen`}>
                {/* Header */}
                <AdminHeader setSidebarToggle={setSidebarToggle} sidebarToggle={sidebarToggle} />
              
                {/* Search Input */}
                <div className="w-full p-4">
                    <div className="relative max-w-xs ml-4">
                        <input
                            type="text"
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute left-3 top-3 text-gray-400">
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 16h4M10 12h4m-2-4h2m-2 8h.01"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* User Table */}
                <div className="overflow-x-auto py-4">
                    {loadingUsers ? (
                        <p>Loading...</p>
                    ) : errorUsers ? (
                        <p>Error fetching users!</p>
                    ) : (
                        <TableUser users = {users} />
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-auto flex justify-center items-center py-4">
                    <Pagination
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default User;
