import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Only import once
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Container,
  Avatar,
  Snackbar,
  Alert,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, AccountCircle, BarChart, MonetizationOn,ExitToApp } from "@mui/icons-material";

const Userdetails = () => {
  // Initializing state with dummy values
  const [userDetails, setUserDetails] = useState({
    name: "Nithiya",
    email: "nithiya@example.com",
    portfolioValue: "150,000 USD",
    riskTolerance: "Medium",
    favoriteStock: "Tesla",
    investmentGoals: "Long-term growth, diversified portfolio",
    contactNumber: "+1 234 567 890",
  });

  const [loading, setLoading] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const navigate = useNavigate(); // Use navigate here

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login"); // Navigate to login page after logout
  };

  // Handle submit for updating the profile
  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToastMessage("User profile updated successfully!");
      setToastSeverity("success");
      setOpenToast(true);
    }, 2000);
  };

  // Handle toast close action
  const handleCloseToast = () => {
    setOpenToast(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          backgroundColor: "#1260cc", // Blue color
          color: "white",
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#1260cc",
            color: "white",
            paddingTop: 2,
          },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Avatar 
            src="https://static.vecteezy.com/system/resources/previews/032/176/191/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" 
            sx={{ width: 80, height: 80, margin: "auto" }} 
          />
          <Typography variant="h6" sx={{ mt: 1, color: "white" }}>Welcome, User</Typography>
        </Box>
        <List>
          <ListItem button onClick={() => navigate("/db")}>
            <ListItemIcon><Home sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="View Stocks" sx={{ color: 'white' }} />
          </ListItem>
          
          <ListItem button onClick={() => navigate("/stock")}>
            <ListItemIcon><MonetizationOn sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Buy Stocks" sx={{ color: 'white' }} />
          </ListItem>
          
          <ListItem button onClick={() => navigate("/profile")}>
            <ListItemIcon><AccountCircle sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="View Profile" sx={{ color: 'white' }} />
          </ListItem>
          
          <ListItem button onClick={() => navigate("/budget")}>
            <ListItemIcon><BarChart sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Budget Plan" sx={{ color: 'white' }} />
          </ListItem>
          
          <ListItem button onClick={() => navigate("/")}>
            <ListItemIcon><ExitToApp sx={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItem>
        </List>
      </Drawer>

      <Container maxWidth="lg" sx={{ mt: 6, flexGrow: 1 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", mb: 3, color: "#283593", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AccountCircle sx={{ fontSize: 40, mr: 1 }} /> 
            Profile Details
          </Typography>
          <br></br>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ width: "55%" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField label="Name" name="name" value={userDetails.name} onChange={handleInputChange} fullWidth />
                <TextField label="Email" name="email" value={userDetails.email} onChange={handleInputChange} fullWidth />
              </Box>

              <TextField label="Portfolio Value" name="portfolioValue" value={userDetails.portfolioValue} onChange={handleInputChange} fullWidth sx={{ my: 2 }} />
              <Box sx={{ display: "flex", gap: 2 }}>
      <TextField label="Risk Tolerance" name="riskTolerance" value={userDetails.riskTolerance} onChange={handleInputChange} fullWidth />
      <TextField label="Favorite Stock" name="favoriteStock" value={userDetails.favoriteStock} onChange={handleInputChange} fullWidth />
    </Box>
              <TextField label="Investment Goals" name="investmentGoals" value={userDetails.investmentGoals} onChange={handleInputChange} fullWidth multiline rows={2} sx={{ my: 2 }} />
              <TextField label="Contact Number" name="contactNumber" value={userDetails.contactNumber} onChange={handleInputChange} fullWidth sx={{ my: 2 }} />

              <Box display="flex" justifyContent="center" mt={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ padding: "10px 20px" }} disabled={loading}>
                  {loading ? <CircularProgress size={24} /> : "Save Profile"}
                </Button>
              </Box>
            </Box>

            <Box sx={{ width: "42%", display: "flex",  }}>
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" 
                alt="User Illustration" 
                style={{ width: "100%" }} 
              />
            </Box>
          </Box>
        </Paper>
      </Container>

      <Snackbar open={openToast} autoHideDuration={6000} onClose={handleCloseToast} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleCloseToast} severity={toastSeverity} sx={{ width: "100%" }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Userdetails;
