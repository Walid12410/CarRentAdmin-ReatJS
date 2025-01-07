import { FaTelegramPlane, FaTrashAlt } from "react-icons/fa"; // Importing icons from react-icons

const TableUser = ({ users }) => {
    return (
        <table className="min-w-full table-auto border-collapse m-2">
        <thead>
            <tr>
                <th className="border p-2">Profile Image</th>
                <th className="border p-2">Username</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user?.id}>
                    <td className="border p-2 w-32">
                        <img
                            src={user?.profilePhoto?.url || "/default-avatar.png"}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    </td>
                    <td className="border p-2">{user?.firstName} {user?.lastName}</td>
                    <td className="border p-2">{user?.phoneNumber}</td>
                    <td className="border p-2">{user?.email}</td>
                    <td className="border p-2">
                        <div className="flex items-center space-x-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500"
                            >
                                <FaTelegramPlane size={20} />
                            </a>
                            <a
                                className="text-red-500"
                            >
                                <FaTrashAlt size={20} />
                            </a>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);
};

export default TableUser;
