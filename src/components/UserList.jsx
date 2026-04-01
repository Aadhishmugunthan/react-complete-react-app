import { useEffect, useState } from "react";
import {
  getUsers,
  deleteUser
} from "../services/api";

const UserList = ({
  newUser,
  onEditUser,
  updatedUser
}) => {

  const [users, setUsers] =
    useState([]);

  const fetchUsers = async () => {

    const response =
      await getUsers();

    setUsers(response.data);

  };

  useEffect(() => {

    fetchUsers();

  }, []);

  // ADD

  useEffect(() => {

    if (newUser) {

      setUsers((prev) => [
        ...prev,
        newUser
      ]);

    }

  }, [newUser]);

  // UPDATE

  useEffect(() => {

    if (updatedUser) {

      setUsers((prev) =>
        prev.map((user) =>
          user.id === updatedUser.id
            ? updatedUser
            : user
        )
      );

    }

  }, [updatedUser]);

  const handleDelete = async (id) => {

    await deleteUser(id);

    setUsers(
      users.filter(
        (user) =>
          user.id !== id
      )
    );

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
            {" | "}
            {user.email}
            {" | "}
            Age: {user.age}
            {" | "}
            {user.nationality}

          </span>

          <div>

            <button
              onClick={() =>
                onEditUser(user)
              }
              style={{
                marginRight: "10px"
              }}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                handleDelete(user.id)
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );

};

export default UserList;