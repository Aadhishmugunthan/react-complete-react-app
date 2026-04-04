import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      {/* DEFAULT ROUTE */}

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* LOGIN */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* SIGNUP */}

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* FALLBACK */}

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>

  );

}

export default App;