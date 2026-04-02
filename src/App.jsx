import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers, deleteUser } from "./services/api";
import { Container, Typography } from "@mui/material";

function App() {

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from API

  const fetchUsers = async () => {

    try {

      const response = await getUsers();

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // Run on page load

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

    } catch (error) {

      console.log(error);

    }

  };

  // Edit user

  const handleEditUser = (user) => {

    setEditingUser(user);

  };

  // Update user

  const handleUpdateUser = (updatedUser) => {

    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );

  };

  // Clear edit mode

  const clearEdit = () => {

    setEditingUser(null);

  };

  return (

    <Container>

      <Typography
        variant="h4"
        marginBottom={3}
      >
        React User Management
      </Typography>

      <UserForm
        onUserAdded={handleUserAdded}
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
        clearEdit={clearEdit}
      />

      <UserList
        users={users}
        onDelete={handleDelete}
        onEdit={handleEditUser}
      />

    </Container>

  );

}

export default App;