import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../../../components/sideBar/SideBar";
import "./user.css";
import { useEffect, useState } from "react";
import { countUser, fetchUsers } from "../../../../redux/api/userApiCall";
import Pagination from "../../../../components/pagination/Pagination";


const USERS_PER_PAGE = 10;

const UserTable = () => {

    const dispatch = useDispatch();
    const { loadingUsers, users, errorUsers, usersCount } = useSelector(state => state.user);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(usersCount / USERS_PER_PAGE);


    useEffect(() => {
        dispatch(fetchUsers(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countUser());
    }, [dispatch]);


    return (
        <section className="admin-dashboard">
            <AdminSideBar />
            <div className="user-wrapper">
                <h1 className="user-title">Users</h1>
                {loadingUsers ? (
                    <div className="loading-spinner"></div>
                ) : errorUsers ? (
                    <div className="error-message">Error fetch users</div>
                ) : (
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Photo</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Created At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user) => (
                                    <tr key={user?._id}>
                                        <td> <img src={user?.profilePhoto?.url} className="user-photo" />
                                        </td>
                                        <td>{user?.firstName} {user?.lastName}</td>
                                        <td>{user?.email}</td>
                                        <td>{user?.phoneNumber}</td>
                                        <td>{new Date(user?.createdAt).toDateString()}</td>
                                        <td>
                                            <div className="table-button-group">
                                                <button>Remove User</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination-conatiner">
                            <Pagination
                                pages={pages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default UserTable
