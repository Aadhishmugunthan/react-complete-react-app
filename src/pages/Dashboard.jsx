import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Button
} from "@mui/material";

import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

import {
  getUsers,
  deleteUser
} from "../services/api";

const Dashboard = () => {

  const [users, setUsers] =
    useState([]);

  const [editingUser, setEditingUser] =
    useState(null);

  // Fetch users

  const fetchUsers = async () => {

    try {

      const response =
        await getUsers();

      setUsers(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchUsers();

  }, []);

  // Add user

  const handleUserAdded = (user) => {

    setUsers((prev) => [
      ...prev,
      user
    ]);

  };

  // Delete user

  const handleDelete = async (id) => {

    try {

      await deleteUser(id);

      setUsers(
        users.filter(
          (user) =>
            user.id !== id
        )
      );

    }

    catch (error) {

      console.log(error);

    }

  };

  // Edit

  const handleEditUser = (user) => {

    setEditingUser(user);

  };

  // Update

  const handleUpdateUser = (updatedUser) => {

    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );

  };

  // Logout

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    window.location.href =
      "/login";

  };

  return (

    <Container>

      <Typography
        variant="h4"
        marginBottom={3}
      >
        React User Management
      </Typography>

      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
        sx={{ mb: 3 }}
      >
        Logout
      </Button>

      <UserForm
        onUserAdded={handleUserAdded}
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
        clearEdit={() =>
          setEditingUser(null)
        }
      />

      <UserList
        users={users}
        onDelete={handleDelete}
        onEdit={handleEditUser}
      />

    </Container>

  );

};

export default Dashboard;