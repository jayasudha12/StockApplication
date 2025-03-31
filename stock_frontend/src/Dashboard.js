import React, { useState, useEffect } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Box, Paper, Container, InputAdornment, TextField } from "@mui/material";
import { Home, AccountCircle, BarChart, ExitToApp, MonetizationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const [topTrendingStocks, setTopTrendingStocks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Dummy data for the top trending stocks
    const dummyData = [
        { rank: 1, company: "Apple Inc.", profit: "$1.2B", price: "$150.10" },
        { rank: 2, company: "Tesla Inc.", profit: "$800M", price: "$650.30" },
        { rank: 3, company: "Amazon Inc.", profit: "$1.5B", price: "$3300.20" },
        { rank: 4, company: "Microsoft Corp.", profit: "$1.8B", price: "$280.40" },
        { rank: 5, company: "Google LLC", profit: "$900M", price: "$2750.50" },
        { rank: 6, company: "Meta Platforms", profit: "$2.1B", price: "$320.50" },  // New company
        { rank: 7, company: "Netflix Inc.", profit: "$700M", price: "$480.20" },
       
    ];

    useEffect(() => {
        // Initially set the trending stocks to the dummy data
        setTopTrendingStocks(dummyData);
    }, []); // Empty dependency array ensures it runs once when the component mounts
    const navigate = useNavigate();
    
        const handleLogout = () => {
          alert("Redirecting to the home page...");
          navigate("/");
        };
    const filterStocks = (query) => {
        if (query) {
            setTopTrendingStocks(
                dummyData.filter(stock =>
                    stock.company.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setTopTrendingStocks(dummyData);
        }
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
                     
                     <ListItem button onClick={handleLogout}>
                       <ListItemIcon><ExitToApp sx={{ color: 'white' }} /></ListItemIcon>
                       <ListItemText primary="Logout" sx={{ color: 'white' }} />
                     </ListItem>
                   </List>
            </Drawer>

            {/* Content Section */}
            <Container maxWidth="lg" sx={{ flexGrow: 1, p: 3 }}>
                {/* Title Section */}
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                        <Avatar 
                            src="https://media.istockphoto.com/id/1186939191/vector/dashboard-icon-in-flat-style-finance-analyzer-vector-illustration-on-white-isolated.jpg?s=612x612&w=0&k=20&c=Uvzz2_C--rDfG9-oAJeS6HuYnvnvp7UFfY5rhGlvkPw="
                            sx={{ width: 50, height: 50, marginRight: 2 }}
                        />
                        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333", fontSize: "30px" }}>
                            TradePulse Dashboard
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mt: 2, color: "#555", fontStyle: "italic" }}>
                    Trade smarter with real-time insights and data-driven market decisions for success and know the day to day stock values.
                    </Typography>
                </Box>

                {/* TradingView iframe and Top Trending Stocks Table */}
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mb: 3 }}>
                    {/* Left Side: TradingView iframe */}
                    <Box sx={{ flex: 1, mr: 1 }}>
                        <iframe
                            src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=NSE:NIFTY&interval=D&theme=light&style=1"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            title="TradingView Chart"
                        />
                    </Box>

                    {/* Right Side: Top Trending Stocks Table */}
                    <Box sx={{ flex: 1 }}>
                        <Paper elevation={3} sx={{ p: 1 }}>
                            <Typography fontSize={'20px'}><center><b>Top Stock Market Companies</b></center></Typography><br></br>
                            <Table sx={{ width: "100%", border: "1px solid black", borderCollapse: "collapse" }}>
                                <TableHead sx={{ backgroundColor: "#1976d2" }}>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold", color: "#fff", textTransform: "uppercase", border: "1px solid #ddd" }}>Rank</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "#fff", textTransform: "uppercase", border: "1px solid #ddd" }}>Company</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "#fff", textTransform: "uppercase", border: "1px solid #ddd" }}>Profit</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "#fff", textTransform: "uppercase", border: "1px solid #ddd" }}>Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {topTrendingStocks.map((stock) => (
                                        <TableRow key={stock.rank}>
                                            <TableCell sx={{ border: "1px solid #ddd" }}>{stock.rank}</TableCell>
                                            <TableCell sx={{ border: "1px solid #ddd" }}>{stock.company}</TableCell>
                                            <TableCell sx={{ border: "1px solid #ddd" }}>{stock.profit}</TableCell>
                                            <TableCell sx={{ border: "1px solid #ddd" }}>${stock.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Box>
                </Box>

                {/* Chart Images Below the Table */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ flex: 1, mr: 2 }}>
                        <img 
                            src="https://lh7-us.googleusercontent.com/docsz/AD_4nXeQleb3YYdmUBQYBhW0rGv4i7rVNEksc9lpsHF2hqft9e2o9up8cePcjssBOP8MleNuXTVDamarDocVjBhG0aDK9G9FcUFdAKQ9Rx71w6L-6bwFFNV0vOTup0o1nOXnSDRiJeNBdZ6s-EUio20l-Z3UwbE?key=e-MyRDtBNWo007d5aICxnA" 
                            alt="Chart 1" 
                            width="100%" 
                            height="300px" 
                            style={{ objectFit: "fill", borderRadius: "8px" }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <img 
                            src="https://www.theforage.com/blog/wp-content/uploads/2024/01/meta-stock-market-chart-1.31.24.png" 
                            alt="Chart 2" 
                            width="100%" 
                            height="300px" 
                            style={{ objectFit: "fill", borderRadius: "8px" }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Dashboard;
