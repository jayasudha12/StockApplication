import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
    Table, TableHead, TableRow, TableCell, TableBody, Button, 
    Dialog, DialogTitle, DialogContent, TextField, DialogActions, 
    Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, 
    Typography, Box, Paper, Container, InputAdornment 
} from "@mui/material";
import { Home, AccountCircle, BarChart, ExitToApp, MonetizationOn, Search, Add, Edit, Delete } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const Asset = () => {
    const [assets, setAssets] = useState([]);
    const [filteredAssets, setFilteredAssets] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        assetUrl: "",
        name: "",
        change24H: "",
        holdings: "",
        avgBuyPrice: "",
        profitLoss: "",
        price: ""
    });
    const [editId, setEditId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchAssets();
    }, []);

    useEffect(() => {
        filterAssets(searchQuery);
    }, [searchQuery, assets]);

    const fetchAssets = async () => {
        try {
            const response = await axios.get("http://localhost:9090/assets");
            setAssets(response.data);
            setFilteredAssets(response.data); // Initialize with all assets
        } catch (error) {
            console.error("Error fetching assets:", error);
        }
    };
    const navigate = useNavigate();

    const handleLogout = () => {
      alert("Redirecting to the home page...");
      navigate("/");
    };
    const filterAssets = (query) => {
        if (query) {
            setFilteredAssets(
                assets.filter(asset =>
                    asset.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredAssets(assets);
        }
    };

    const handleOpen = (asset = null) => {
        if (asset) {
            setEditId(asset.id);
            setFormData(asset);
        } else {
            setEditId(null);
            setFormData({
                assetUrl: "",
                name: "",
                change24H: "",
                holdings: "",
                avgBuyPrice: "",
                profitLoss: "",
                price: ""
            });
        }
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (editId) {
                await axios.put(`http://localhost:9090/assets/${editId}`, formData);
            } else {
                await axios.post("http://localhost:9090/assets", formData);
            }
            fetchAssets();
            handleClose();
        } catch (error) {
            console.error("Error saving asset:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9090/assets/${id}`);
            fetchAssets();
        } catch (error) {
            console.error("Error deleting asset:", error);
        }
    };

    const getHoldingsStyle = (holdings) => {
        return holdings > 2 
            ? { color: 'green', display: 'flex', alignItems: 'center' }
            : { color: 'red', display: 'flex', alignItems: 'center' };
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    backgroundColor: '#1260cc', // Blue color
                    color: 'white',
                    '& .MuiDrawer-paper': {
                        width: 240,
                        backgroundColor: '#1260cc',
                        color: 'white',
                        paddingTop: 2
                    }
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Avatar 
                        src="https://static.vecteezy.com/system/resources/previews/032/176/191/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" 
                        sx={{ width: 80, height: 80, margin: 'auto' }} 
                    />
                    <Typography variant="h6" sx={{ mt: 1, color: 'white' }}>Welcome, User</Typography>
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
                {/* Title and Quotes Section */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    {/* Title and Logo Inline */}
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                        {/* Portfolio Logo */}
                        <Avatar 
                            src="https://cdn.vectorstock.com/i/500p/73/79/analysis-stock-market-black-icon-on-white-vector-31617379.jpg" // Logo image path
                            sx={{ width: 50, height: 50, marginRight: 2 }} // Adjust size and spacing
                        />
                        
                        {/* Title */}
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333', fontSize: '30px' }}>
                            Portfolio Management
                        </Typography>
                    </Box>
                    
                    {/* Quote */}
                    <Typography variant="body1" sx={{ mt: 2, color: '#555', fontStyle: 'italic' }}>
                        "The stock market is always filled with individuals who know the price of everything, but the value of nothing."
                    </Typography>
                </Box>
<br></br>
                {/* Add Asset Button */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleOpen()}
                        sx={{
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: 16
                        }}
                    >
                        <Add sx={{ mr: 1 }} /> Add Asset
                    </Button>

                    {/* Search */}
                    <TextField
    label="Search Assets"
    variant="outlined"
    color="primary"
    size="small"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    sx={{ width: "430px" }}  // Increase width as needed
    InputProps={{
        startAdornment: (
            <InputAdornment position="start">
                <Search />
            </InputAdornment>
        )
    }}
/>

                </Box>

                {/* Assets Table */}
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Table sx={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
                        <TableHead sx={{ backgroundColor: '#1976d2' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>Image</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>24H%</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>Holdings</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>Avg Buy Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>Profit/Loss</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', border: '1px solid #ddd' }}><center>Actions</center></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAssets.map((asset) => (
                                <TableRow key={asset.id}>
                                    <TableCell sx={{ border: '1px solid #ddd' }}>
                                        <img src={asset.assetUrl} alt={asset.name} width={50} />
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd' }}><b>{asset.name}</b></TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd',color:"green" }}>{asset.change24H}%</TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd' }}><b><center>{asset.holdings}</center></b></TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd' }}><b><center>${asset.avgBuyPrice}</center></b></TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd' }}><b><center>${asset.profitLoss}</center></b></TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd' }}><b>${asset.price}</b></TableCell>
                                    <TableCell sx={{ border: '1px solid #ddd' }}><center>
    <Button 
        onClick={() => handleOpen(asset)} 
        startIcon={<Edit />} 
        variant="contained" 
        color='info' 
        
        sx={{ marginRight: '8px' }} // Adds space between the buttons
    >Edit
    </Button>
    <Button 
         
        onClick={() => handleDelete(asset.id)} 
        startIcon={<Delete />} 
        variant="contained"
        color="error"
    > Delete</Button>
    </center>
</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>

            {/* Dialog for Add/Edit */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{editId ? "Edit Asset" : "Add Asset"}</DialogTitle>
                <DialogContent>
                    {Object.keys(formData).map((key) => (
                        <TextField
                            key={key}
                            fullWidth
                            margin="dense"
                            label={key.replace(/([A-Z])/g, ' $1').trim()}
                            name={key}
                            type={["change24H", "holdings", "avgBuyPrice", "profitLoss", "price"].includes(key) ? "number" : "text"}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">{editId ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Asset;
