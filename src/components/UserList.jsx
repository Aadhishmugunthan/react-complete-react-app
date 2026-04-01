import { useEffect, useState } from "react";
import {
  getUsers,
  deleteUser
} from "../services/api";

const UserList = ({ newUser }) => {

  const [users, setUsers] =
    useState([]);

  const fetchUsers = async () => {

    try {

      const response =
        await getUsers();

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchUsers();

  }, []);

  // Add new user instantly

  useEffect(() => {

    if (newUser) {

      setUsers((prev) => [

        ...prev,

        newUser

      ]);

    }

  }, [newUser]);

  const handleDelete = async (id) => {

    try {

      await deleteUser(id);

      setUsers(

        users.filter(

          (user) =>
            user.id !== id

        )

      );

    } catch (error) {

      console.log(error);

    }
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