import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../../../components/Admin-Components/sideBar/SideBar";
import "../pages.css";
import { useEffect, useState } from "react";
import { countUser, fetchUsers } from "../../../../redux/api/userApiCall";
import Pagination from "../../../../components/pagination/Pagination";
import Table from "../../../../components/table/Table";
import "./user.css";


const USERS_PER_PAGE = 10;

const User = () => {

    const dispatch = useDispatch();
    const { loadingUsers, users, errorUsers, usersCount } = useSelector(state => state.user);
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(usersCount / USERS_PER_PAGE);

    const columns = [
        { columnName: "User Photo", dataField: "photo" },
        { columnName: "User Name", dataField: "userName" },
        { columnName: "Email", dataField: "email" },
        { columnName: "Phone Number", dataField: "phoneNumber" },
        { columnName: "Created At", dataField: "createdAt" },
        { columnName: "Action", dataField: "action" },
    ];

    useEffect(() => {
        dispatch(fetchUsers(currentPage));
        window.scrollTo(0, 0);
    }, [currentPage]);

    useEffect(() => {
        dispatch(countUser());
    }, [dispatch]);


    const rows = users?.map(user => ({
        photo: (
            <img src={user?.profilePhoto?.url} className="user-photo" />
        ),
        userName: `${user?.firstName} ${user?.lastName}`,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        createdAt: new Date(user?.createdAt).toDateString(),
        action: (
            <div className="table-button-group">
                <button className="delete-btn">Remove User</button>
            </div>
        )
    }))


    return (
        <section className="page-container">
            <AdminSideBar />
            <div className="wrapper">
                <h1 className="page-title">Users</h1>
                <input type="text" className="search-user" placeholder="Search for specific user" />
                {loadingUsers ? (
                    <div className="loading-spinner"></div>
                ) : errorUsers ? (
                    <div className="error-message">Error fetch users</div>
                ) : (
                    <>
                        <Table columns={columns} rows={rows} />
                        {usersCount < 10 ? <div></div> : <div className="pagination-conatiner">
                            <Pagination
                                pages={pages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>}
                    </>
                )}
            </div>
        </section>
    );
}

export default User;
