import { useState } from "react";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert
} from "@mui/material";

import {
  useNavigate,
  Link
} from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = () => {

    const savedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    console.log(
      "Entered email:",
      email
    );

    console.log(
      "Entered password:",
      password
    );

    console.log(
      "Saved user:",
      savedUser
    );

    if (!savedUser) {

      setError(
        "No user found. Please signup."
      );

      return;

    }

    if (
      savedUser.email.trim() ===
        email.trim() &&
      savedUser.password.trim() ===
        password.trim()
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      console.log(
        "Login success"
      );

      navigate("/");

    }

    else {

      setError(
        "Invalid credentials"
      );

    }

  };

  return (

    <Container
      maxWidth="sm"
      sx={{ mt: 8 }}
    >

      <Typography
        variant="h4"
        mb={3}
      >
        Login
      </Typography>

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      )}

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
      >

        <TextField
          label="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <Button
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>

        <Link to="/signup">
          Create account
        </Link>

      </Box>

    </Container>

  );

};

export default Login;