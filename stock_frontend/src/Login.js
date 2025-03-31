import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Link,
  InputAdornment,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!isValidEmail(formData.email)) {
      setError("Invalid email format! Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:9090/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.msg || "Login failed!");

      localStorage.setItem("token", data.token);
      navigate("/asset");
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          width: "950px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Image */}
        <Box
          sx={{
            width: "65%",
            backgroundImage:
              'url("https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Right Side - Form */}
        <Box sx={{ width: "70%", padding: 4 }}>
          <Typography
            variant="h5"
            color="primary"
            fontWeight="bold"
            textAlign="center"
            mb={2}
          >
            <LoginIcon sx={{ mr: 1 }} /> Login Here!
          </Typography>
            {/* Motivational Quote */}
           


          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign="center"
            sx={{ mt: 2, fontStyle: "italic" }}
          >
            "The journey of a thousand miles begins with a single step."
          </Typography>
          <br></br>
          <br></br>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br></br>
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
            </Button>
          </form>

        
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/register" sx={{ textDecoration: "none" }}>
              Don't have an account? Register
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
