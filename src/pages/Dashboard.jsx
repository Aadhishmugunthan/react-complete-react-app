import { useState } from "react";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box
} from "@mui/material";

import {
  useNavigate,
  Link
} from "react-router-dom";

const user =
  JSON.parse(
    localStorage.getItem("user")
  );

  <h2>
  Welcome, {user?.name}
</h2>

const Signup = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSignup = () => {

    if (
      form.password !== form.confirmPassword
    ) {

      alert(
        "Passwords do not match"
      );

      return;

    }

    // Save user to localStorage

    localStorage.setItem(
      "user",
      JSON.stringify(form)
    );

    localStorage.setItem(
      "isLoggedIn",
      true
    );

    navigate("/");

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
        Sign Up
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
      >

        <TextField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          onClick={handleSignup}
        >
          Sign Up
        </Button>

        <Link to="/login">
          Already have account?
        </Link>

      </Box>

    </Container>

  );

};

export default Signup;