import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {

  const [newUser, setNewUser] = useState(null);

  const handleUserAdded = (user) => {
    setNewUser(user);
  };

  return (
    <div className="app">

      <header className="header">
        <h1>React User Management</h1>
        <p>CRUD Application with API</p>
      </header>

      <div className="container">

        <div className="card">
          <UserForm onUserAdded={handleUserAdded} />
        </div>

        <div className="card">
          <UserList newUser={newUser} />
        </div>

      </div>

    </div>
  );
}

export default App;