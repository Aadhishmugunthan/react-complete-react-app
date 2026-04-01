import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>React User Management</h1>
        <p>CRUD Application with API</p>
      </header>

      <div className="container">

        <div className="card">
          <UserForm />
        </div>

        <div className="card">
          <UserList />
        </div>

      </div>

    </div>
  );
}

export default App;