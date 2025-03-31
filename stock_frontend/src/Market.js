import React, { useState } from "react";
import { 
  AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, 
  CardMedia, Button, TextField, Paper, Box, Divider, IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemIcon, ListItemText
} from "@mui/material";
import { TrendingUp, Business, AttachMoney, ShowChart, Search, Notifications, Info } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewspaperUI = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={false} style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "20px" }}>
      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <img src="https://static.vecteezy.com/system/resources/previews/003/659/087/non_2x/t-white-alphabet-letter-black-circle-company-business-logo-icon-design-corporate-vector.jpg" alt="Logo" height="40px" style={{ marginRight: 16 }} />
          <Typography variant="h4" style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
             Stock Investment News Updates
          </Typography>
          <TextField variant="outlined" size="small" placeholder="Search..." style={{ backgroundColor: "#fff", borderRadius: "5px", marginRight: 10 }} />
          <IconButton color="inherit"><Search /></IconButton>
          <IconButton color="inherit" onClick={handleOpen}><Notifications /></IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Trending Bar */}
      <Paper elevation={3} style={{ marginTop: 10, padding: 10, backgroundColor: "#ffc107" }}>
        <Marquee>
          <Typography variant="subtitle1" color="textPrimary">
          📈 Market Update – March 21, 2025

✅ Tesla Surges 5% – Tesla stock ($TSLA) jumped 5% after reporting record-breaking EV sales and announcing a new AI-powered self-driving upgrade. Investors remain bullish on the company’s future despite global economic uncertainties.

📉 Bitcoin Drops Below $60K – The cryptocurrency market is facing volatility as Bitcoin ($BTC) slipped below the critical $60,000 support level. Analysts point to increased regulatory scrutiny and profit-taking by major holders.

📊 Dow Jones Hits All-Time High – The Dow Jones Industrial Average soared to a historic high, closing at 39,850 points. The rally was driven by strong corporate earnings and optimism around the Fed’s interest rate strategy.
          </Typography>
        </Marquee>
      </Paper>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        {/* Left Column - Stock Articles */}
        <Grid item xs={12} md={3}>
          <Card backgroundColor="#f0f8ff">
            <CardMedia component="img" backgroundColor="#f0f8ff"height="200" image="https://images.barrons.com/im-47746981?width=700&height=466" alt="Tesla Stock" />
            <CardContent>
              <Typography variant="h6">Tesla Hits Record High as EV Demand Soars</Typography>
              <br></br> <Link to="https://www.marketwatch.com/investing/stock/tsla" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">READ MORE</Button>
    </Link>
            </CardContent>
          </Card>
          <Card style={{ marginTop: 10 }} backgroundColor="#f0f8ff">
            <CardMedia component="img" height="220" image="https://media.istockphoto.com/id/1248674191/photo/bitcoin-gold-cryptocurrency-trading-chart.jpg?s=612x612&w=0&k=20&c=Zj-t9bYp9FChMLXGMRqt2l41KGjYp1jZaehbCKjJWcw=" alt="Bitcoin Crash" />
            <CardContent>
              <Typography variant="h6">Bitcoin Slumps Below $60K Amid Market Uncertainty</Typography>
          
              <br></br><Link to="https://bitcoin.org/en/" style={{ textDecoration: "none" }}>
      <Button variant="contained" color="secondary">READ NOW</Button>
    </Link>
            </CardContent>
          </Card>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Stock Market Notifications</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <ListItemIcon><TrendingUp color="primary" /></ListItemIcon>
              <ListItemText primary="Tesla Surges 5% on Record EV Sales" />
            </ListItem>
            <ListItem>
              <ListItemIcon><AttachMoney color="secondary" /></ListItemIcon>
              <ListItemText primary="Bitcoin Drops Below $60K Amid Market Uncertainty" />
            </ListItem>
            <ListItem>
              <ListItemIcon><ShowChart color="success" /></ListItemIcon>
              <ListItemText primary="Dow Jones Hits All-Time High at 39,850" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
        {/* Main Article */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" height="300" image="https://www.nyse.com/publicdocs/images/1903_trading_floor_NYSE.jpeg" alt="Wall Street" />
            <CardContent>
              <Typography variant="h5">Wall Street Celebrates as Dow Hits All-Time High</Typography>
              <Typography variant="body2">NEW YORK – The Dow Jones Industrial Average soared to record highs today...</Typography>
            </CardContent>
          </Card>
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NASDAQ:AAPL&theme=light&autosize=true"
            style={{ width: "100%", height: "355px", marginTop: "10px", border: "none" }}
            title="Stock Market Overview"
          ></iframe>
        </Grid>

        {/* Right Column - Introduction & Stock Insights */}
        <Grid item xs={12} md={3}>
        

        <Paper elevation={3} style={{ padding: 20, marginBottom: 20, backgroundColor: "#f0f8ff", borderRadius: 10 }}>
      {/* Header with Logo Image */}
      <Box display="flex" alignItems="center" style={{ marginBottom: 10 }}>
        <img 
          src="https://logoeps.com/wp-content/uploads/2014/05/21601-news-logo-icon-vector-icon-vector-eps.png" 
          alt="Stock News Logo" 
          style={{ width: 40, height: 40, marginRight: 10 }} 
        />
        <Typography variant="h6" style={{ color: "#333", fontWeight: "bold" }}>
          Stock Updates Live
        </Typography>
      </Box>
      

      {/* Stock Market Insights */}
    <Typography variant="body1" style={{ color: "#444", fontSize: "14px", lineHeight: "1.6" }}>
  Stay ahead in the fast-paced world of finance with real-time updates, in-depth analysis, and expert insights.  
  Track stock market movements, crypto trends, and economic shifts to make informed investment decisions.  
    
</Typography>
<br></br>
<Typography variant="body1" style={{ color: "#444", fontSize: "14px", lineHeight: "1.6" }}>
   
  • Get personalized alerts on price movements and breaking financial news.  
   
</Typography>
<Typography variant="body1" style={{ color: "#444", fontSize: "14px", lineHeight: "1.6" }}>
   
• Access professional charting tools to analyze trends with precision.  
   
</Typography>
    </Paper>



          {/* Stock Insights Section */}
          <Typography variant="h6" style={{ color: "black" }}>
            <Business style={{ marginRight: 5 }} /> Stock Insights
          </Typography>
          <Divider style={{ marginBottom: 10 }} />
          
          <Box display="flex" alignItems="center" style={{ marginBottom: 10 }}>
            <CardMedia component="img" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxWHoI7KlwxPXPgm3t4wGVwaU2uTwbNPMOg&s" height="80" width="80" alt="Meta Stock" style={{ marginRight: 10 }} />
            <Typography variant="body2" style={{ color: "black" }}> New Revolution : Meta  Expands Investments</Typography>
          </Box>
          
          <Box display="flex" alignItems="center" style={{ marginBottom: 10 }}>
            <CardMedia component="img" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8EmFqa18ydeW83UvF8eTWhWYgx3SSHWWnw&s" height="80" width="80" alt="Amazon Stocks" style={{ marginRight: 10 }} />
            <Typography variant="body2" style={{ color: "black" }}>Amazon Boosts Cloud Revenue by 20%</Typography>
          </Box>
          
          <Box display="flex" alignItems="center" style={{ marginBottom: 10 }}>
            <CardMedia component="img" image="https://media.istockphoto.com/id/535484810/photo/gold-bars-on-white-background.jpg?s=612x612&w=0&k=20&c=gmjQGSrVRRemRFl7fZrxAEH_K9j9gTJOQmlIoANc56U=" height="80" width="80" alt="Gold Prices" style={{ marginRight: 10 }} />
            <Typography variant="body2" style={{ color: "black" }}>Gold Prices Surge Amid Inflation Fears</Typography>
          </Box>
          
          <Box display="flex" alignItems="center">
            <CardMedia component="img" image="https://media.istockphoto.com/id/489082308/photo/oil-pumps.jpg?s=612x612&w=0&k=20&c=tzs5p8RVnvYcmtSAzf11hOsTDtvRDSWyLP8Ja13ZuWU=" height="80" width="80" alt="Oil Market" style={{ marginRight: 10 }} />
            <Typography variant="body2" style={{ color: "black" }}>Oil Prices Climb on Supply Concerns</Typography>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default NewspaperUI;
