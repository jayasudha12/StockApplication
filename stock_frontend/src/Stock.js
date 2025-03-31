import React, { useState } from "react";
import {
  Box,
  Drawer,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Card,
  Chip,
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import {
  Home,
  MonetizationOn,
  AccountCircle,
  BarChart,
  ExitToApp,
  ShoppingCart,
  Timeline,
  Business,
  TrendingUp,
  AttachMoney,
  ArrowUpward,
  Warning,
  AccountBalanceWallet,
  Menu as MenuIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
  const navigate = useNavigate(); // ✅ Correct usage inside function body

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "#0d47a1",
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
        <Typography variant="h6" sx={{ mt: 1, color: "white", fontWeight: 600 }}>
          Welcome, User
        </Typography>
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

        <ListItem button onClick={() => {
          alert("Redirecting to the home page...");
          navigate("/");
        }}>
          <ListItemIcon><ExitToApp sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};


const Dashboard = () => {

  const [selectedTab, setSelectedTab] = useState(2); // Track selected tab
  const [openDematDialog, setOpenDematDialog] = useState(false); // Dialog for Demat account
  const [openMarketDialog, setOpenMarketDialog] = useState(false); // Dialog for NSE/BSE selection
  const [hasDematAccount, setHasDematAccount] = useState(null); // State for Demat account question
  const [selectedMarket, setSelectedMarket] = useState(""); // State for NSE/BSE
  const [anchorEl, setAnchorEl] = useState(null); // State for hamburger menu
  const [tabBackgroundColor, setTabBackgroundColor] = useState("transparent"); // Tab background color state

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleHamburgerMenuClick = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor for the menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };


  const handleBuyStockClick = () => {
    setOpenDematDialog(true);
  };

  const handleDematResponse = (response) => {
    setHasDematAccount(response);
    setOpenDematDialog(false);
    if (response === "yes") {
      setOpenMarketDialog(true); // Open the market selection dialog
    } else {
      // Navigate to Demat account page logic
      alert("Redirecting to Demat account page...");
      window.location.href = "/demat"; 
      setTabBackgroundColor("white"); // Set tab background to white if "No" is clicked
    }
  };

  const handleMarketChoice = (market) => {
    setSelectedMarket(market);
    setOpenMarketDialog(false); // Close market dialog
    alert(`You selected ${market}. Redirecting to ${market} page...`);
    if (market === "NSE") {
      window.location.href = "/nse"; // Redirect to NSE page
    } else if (market === "BSE") {
      window.location.href = "/bse"; // Redirect to BSE page
    }
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src="https://static.vecteezy.com/system/resources/previews/003/659/087/non_2x/t-white-alphabet-letter-black-circle-company-business-logo-icon-design-corporate-vector.jpg"
              sx={{ width: 60, height: 60, mr: 2 }}
            />
            <Box>
              <Typography variant="h5" fontWeight={700} color={"textPrimary"}>
                TradePulse Holdings Inc
              </Typography>
              <Typography variant="body1" color="gray">
                United States | Information Technology
              </Typography>
            </Box>
          </Box>
          <Box>
          <Button
  variant="outlined"
  sx={{ mr: 2, borderRadius: "20px", fontWeight: 600 }}
  startIcon={<AccountBalanceWallet />}
  onClick={() => window.location.href = "https://www.nseindia.com/market-data/currency-derivatives"} // Navigate to the URL
>
  Currency
</Button>

            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCart />}
              sx={{ borderRadius: "20px", fontWeight: 600 }}
              onClick={handleBuyStockClick}
            >
              Buy Stocks
            </Button>
          </Box>
        </Box>
<hr></hr>
        {/* Tabs and Hamburger Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              sx={{ mt: 3, backgroundColor: "white", borderRadius: "12px", flexGrow: 0}}
            >
              {["1 Day", "3 Days", "1 Week", "1 Month", "3 Months", "1 Year", "5 Years", "10 Years"].map(
                (label, index) => (
                  <Tab key={index} label={label} sx={{ fontWeight: 600 }} />
                )
              )}
            </Tabs>
          </Box>

          {/* Hamburger Icon */}
          <IconButton 
  onClick={handleHamburgerMenuClick} 
  sx={{
    ml: 9, 
    backgroundColor: "white", // Add background color
    borderRadius: "50%", // Make it circular
    padding: 1, // Optional: Adjust padding to make sure the icon stays centered
    "&:hover": {
      backgroundColor: "white", // Darken the background color on hover
    },
  }}
>
  <MenuIcon sx={{ color: "primary.main" }} /> {/* Change icon color to white */}
</IconButton>

        </Box>

        {/* Menu for Hamburger */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Budget</MenuItem>
        </Menu>

        <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
          <Card sx={{ flex: 2, padding: 3, backgroundColor: "white", borderRadius: "12px", boxShadow: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Timeline sx={{ color: "primary.main", mr: 1, fontSize: 30 }} />
              <Typography variant="h6" fontWeight={700}>
                Stock Price History
              </Typography>
            </Box>
            <img
              src="https://static.seekingalpha.com/uploads/2012/10/12/saupload_SPX-behavior-of-the-months.png"
              style={{ width: "100%", height: "400px", objectFit: "fill", borderRadius: "8px" }}
            />
          </Card>

          <Card sx={{ flex: 1, padding: 3, backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Business sx={{ color: "primary.main", mr: 1, fontSize: 30 }} />
              <Typography variant="h6" fontWeight={700}>
                Company Profile
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight={600} color="textPrimary">
              TradePulse Holdings, Inc. provides cloud-delivered protection across endpoints and workloads...
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" fontWeight={600} color="primary.main">
              <strong>Sector:</strong> Information Technology
            </Typography>
            <Typography variant="subtitle1" mt={2} fontWeight={600}>
              Latest Report: <strong>October 31, 2023</strong>
            </Typography>
            <Typography variant="subtitle1" mt={1} fontWeight={600}>
              Next Earnings: <strong>March 6, 2024</strong>
            </Typography>
            <Box mt={2}>
              <Chip icon={<TrendingUp />} label="Consistently increasing earnings per share" color="lightgreen" sx={{ fontWeight: 600, m: 0.5 }} />
              <Chip icon={<AttachMoney />} label="Net income is expected to grow for this year" color="lightgreen" sx={{ fontWeight: 600, m: 0.5 }} />
              <Chip
                icon={<Warning sx={{ color: "red", mr: 1, fontSize: 23 }} />}
                label="RSI suggests overbought territory and growth"
                sx={{ fontWeight: 600, m: 0.5, color: "black" }}
              />
              <Chip icon={<ArrowUpward />} label="High return over last year and this month" color="lightgreen" sx={{ fontWeight: 600, m: 0.5 }} />
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Demat Account Dialog */}
      <Dialog open={openDematDialog} onClose={() => setOpenDematDialog(false)}>
        <DialogTitle>Do you have a Demat Account?</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => handleDematResponse("yes")} fullWidth>
              Yes
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => handleDematResponse("no")} fullWidth>
              No
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Market Selection Dialog */}
      <Dialog open={openMarketDialog} onClose={() => setOpenMarketDialog(false)}>
        <DialogTitle>Choose Market</DialogTitle>
        <DialogContent>
          <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={() => handleMarketChoice("NSE")}>
            NSE
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleMarketChoice("BSE")}>
            BSE
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
