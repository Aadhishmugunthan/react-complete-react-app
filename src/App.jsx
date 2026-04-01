import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {

  const [newUser, setNewUser] =
    useState(null);

  const [editingUser, setEditingUser] =
    useState(null);

  const [updatedUser, setUpdatedUser] =
    useState(null);

  const handleUserAdded = (user) => {

    setNewUser(user);

  };

  const handleEditUser = (user) => {

    setEditingUser(user);

  };

  const handleUpdateUser = (user) => {

    setUpdatedUser(user);

  };

  const clearEdit = () => {

    setEditingUser(null);

  };

  return (

    <div className="app">

      <header className="header">

        <h1>
          React User Management
        </h1>

        <p>
          CRUD Application with API
        </p>

      </header>

      <div className="container">

        <div className="card">

          <UserForm
            onUserAdded={
              handleUserAdded
            }
            editingUser={
              editingUser
            }
            onUpdateUser={
              handleUpdateUser
            }
            clearEdit={
              clearEdit
            }
          />

        </div>

        <div className="card">

          <UserList
            newUser={
              newUser
            }
            updatedUser={
              updatedUser
            }
            onEditUser={
              handleEditUser
            }
          />

        </div>

      </div>

    </div>

  );

}

export default App;