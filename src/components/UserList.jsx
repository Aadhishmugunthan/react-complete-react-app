import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>

      <h2 className="title">
        User List
      </h2>

      {users.map((user) => (
        <div
          key={user.id}
          className="user-item"
        >
          <span>
            {user.name}
          </span>

          <button
            className="delete-btn"
            onClick={() =>
              handleDelete(user.id)
            }
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
};

export default UserList;