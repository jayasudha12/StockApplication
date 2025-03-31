import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Button,
  TextField,
  List,
  ListItem,
  Grid,
  IconButton,
  Box,
  Drawer,
  ListItemText,
  ListItemIcon,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Divider,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { Home, MonetizationOn, AccountCircle, BarChart, ExitToApp, AccountBalanceWallet } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AccountBalance,TrendingUp } from '@mui/icons-material';


const ExpenseCategories = {
  getDefaultExpenses: () => ({
    Housing: 0.0,
    Food: 0.0,
    Transportation: 0.0,
    Entertainment: 0.0,
  })
};

function Budget() {
  const [budgets, setBudgets] = useState([]);
  const [editingBudget, setEditingBudget] = useState(null);
  const [budgetData, setBudgetData] = useState({
    name: "",
    totalAmount: 0,
    expenses: ExpenseCategories.getDefaultExpenses(),
  });
  const [openExpenseDialog, setOpenExpenseDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [budgetToDelete, setBudgetToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openWalletDialog, setOpenWalletDialog] = useState(false);  // New state for wallet dialog
  const navigate = useNavigate();

  useEffect(() => {
    fetchBudgets();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get("http://localhost:9090/budgets");
      setBudgets(response.data);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudgetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBudget) {
        await axios.put(`http://localhost:9090/budgets/${editingBudget.id}`, budgetData);
      } else {
        await axios.post("http://localhost:9090/budgets", budgetData);
      }
      setEditingBudget(null);
      fetchBudgets();
      setBudgetData({
        name: "",
        totalAmount: 0,
        expenses: ExpenseCategories.getDefaultExpenses(),
      });
    } catch (error) {
      console.error("Error saving budget:", error);
    }
  };

  const handleEdit = (budget) => {
    setEditingBudget(budget);
    setBudgetData({
      name: budget.name,
      totalAmount: budget.totalAmount,
      expenses: budget.expenses,
    });
    setOpenExpenseDialog(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9090/budgets/${budgetToDelete.id}`);
      setOpenDeleteDialog(false);
      fetchBudgets();
    } catch (error) {
      console.error("Error deleting budget:", error);
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
    // Implement logout logic here
  };

  const calculateTotalExpenses = (expenses) => {
    return Object.values(expenses).reduce((sum, value) => sum + parseFloat(value), 0).toFixed(2);
  };

  const filteredBudgets = budgets.filter((budget) =>
    budget.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stockQuotes = [
    "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    "Risk comes from not knowing what you're doing.",
    "Invest in yourself. Your career is the engine of your wealth.",
    "In investing, what is comfortable is rarely profitable.",
    "The stock market is a device for transferring money from the impatient to the patient."
  ];

  const randomQuote = stockQuotes[Math.floor(Math.random() * stockQuotes.length)];

  // Calculate total available budget, used budget, and remaining budget
  const totalUsed = filteredBudgets.reduce((acc, budget) => acc + parseFloat(calculateTotalExpenses(budget.expenses)), 0);
  const totalAvailable = filteredBudgets.reduce((acc, budget) => acc + parseFloat(budget.totalAmount), 0);
  const totalRemaining = totalAvailable - totalUsed;

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
            src="https://static.vecteezy.com/system/resources/previews/032/176/191/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" // Replace with your logo URL
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

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, backgroundColor: "white", padding: "20px" }}>
        <Container maxWidth="lg">
          {/* Budget Management Title with Logo Above Quotes */}
          <Box sx={{ textAlign: "center", marginBottom: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
  {/* Logo and Title */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 2 }}>
    <Avatar
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVGWf6z1a1K9fBBaNjPSX7rqyYO7eHyssxA&s"
      sx={{ width: 50, height: 50, marginRight: 2 }} // Margin to separate the logo from the text
    />
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
      Budget Management
    </Typography>
  </Box>

  {/* Quote */}
  <Typography variant="body1" sx={{ fontStyle: "italic", color: "gray", marginBottom: 2 }}>
  The stock market is filled with individuals who know the price of everything, but the value of nothing.
  </Typography>
</Box>


          {/* Search Bar */}
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <TextField
              label="Search Budget"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
<br></br>
          {/* Buttons to Add Budget and Add Expense */}
          
<Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
  <Button
    variant="contained"
    color="primary"
    onClick={() => setOpenExpenseDialog(true)}
    sx={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <AddIcon sx={{ marginRight: 1 }} />
    Add Budget
  </Button>

  <Button
    variant="contained"
    color="secondary"
    onClick={() => setOpenExpenseDialog(true)}
    sx={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <AddShoppingCartIcon sx={{ marginRight: 1 }} />
    Add Expense
  </Button>
            <Button
              variant="contained"
              color="info"
              startIcon={<AccountBalanceWallet />}
              onClick={() => setOpenWalletDialog(true)}
              sx={{ width: '30%' }}
            >
              View Wallet
            </Button>
          </Box>

          
        {/* Wallet Dialog */}
<Dialog open={openWalletDialog} onClose={() => setOpenWalletDialog(false)}>
  <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
    <AccountBalanceWallet sx={{ marginRight: 1, fontSize: 30, color: '#1260cc' }} />
    <Typography variant="h6" component="span"><b>Wallet Overview</b></Typography>
  </DialogTitle>
  <DialogContent>
    {/* Wrap in a Box to create a card-like effect for the fields */}
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      backgroundColor: '#f9f9f9',
      borderRadius: 2,
      padding: 2,
      boxShadow: 3,
    }}>
      {/* Total Available Budget */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <MonetizationOn sx={{ marginRight: 1, color: '#1260cc' }} />
          Total Available Budget
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ${totalAvailable.toFixed(2)}
        </Typography>
      </Box>

      {/* Total Budget Used */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <TrendingUp sx={{ marginRight: 1, color: '#1260cc' }} />
          Total Budget Used
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ${totalUsed.toFixed(2)}
        </Typography>
      </Box>

      {/* Remaining Budget */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <AccountBalance sx={{ marginRight: 1, color: 'green' }} />
          Remaining Budget
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'green' }}>
          ${totalRemaining.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  </DialogContent>
  <DialogActions sx={{ justifyContent: 'center' }}>
    <Button onClick={() => setOpenWalletDialog(false)} color="primary" variant="contained">
      Close
    </Button>
  </DialogActions>
</Dialog>

<br></br>
          {/* Budget List Table */}
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
            <thead>
              <tr style={{ backgroundColor: "#1260cc", color: "white" }}>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Budget Name</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Total Amount</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Total Expenses</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Created At</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Updated At</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #ddd" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBudgets.map((budget) => (
                <tr key={budget.id} style={{ color: "black" }}>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{budget.name}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>${budget.totalAmount}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>${calculateTotalExpenses(budget.expenses)}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{budget.createdAt}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>{budget.updatedAt}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                    <IconButton onClick={() => handleEdit(budget)} sx={{ color: '#1260cc' }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => { setBudgetToDelete(budget); setOpenDeleteDialog(true); }} sx={{ color: '#e53935' }}>
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Box>

      {/* Add Expense Dialog */}
      <Dialog open={openExpenseDialog} onClose={() => setOpenExpenseDialog(false)} maxWidth="lg">
        <DialogTitle>{editingBudget ? "Edit Budget" : "Add New Budget"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Budget Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={budgetData.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Total Amount"
              variant="outlined"
              fullWidth
              margin="normal"
              name="totalAmount"
              type="number"
              value={budgetData.totalAmount}
              onChange={handleInputChange}
            />
            <Typography variant="h6" gutterBottom>
              Expenses
            </Typography>
            <Grid container spacing={2}>
              {Object.keys(budgetData.expenses).map((category) => (
                <Grid item xs={6} key={category}>
                  <TextField
                    label={category}
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={budgetData.expenses[category]}
                    onChange={(e) =>
                      setBudgetData((prevData) => ({
                        ...prevData,
                        expenses: {
                          ...prevData.expenses,
                          [category]: e.target.value,
                        },
                      }))
                    }
                  />
                </Grid>
              ))}
            </Grid>
            <DialogActions>
              <Button onClick={() => setOpenExpenseDialog(false)} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                {editingBudget ? "Save Changes" : "Add Budget"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)} maxWidth="sm">
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this budget?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">Cancel</Button>
          <Button onClick={handleDelete} color="secondary">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Budget;
