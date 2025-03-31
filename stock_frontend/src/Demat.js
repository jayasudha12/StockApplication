import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton, Card, CardContent, CardMedia, Typography, Grid, Box, Button } from "@mui/material";
import { Search, ArrowBack, OpenInNew, PlayCircleOutline } from "@mui/icons-material";

const brokers = [
  { name: "Groww", videoId: "Uon_ackgHGg", loginLink: "https://groww.in/login", accountLink: "https://groww.in/open-demat-account" },
  { name: "Zerodha", videoId: "QaKbnXndWUY", loginLink: "https://kite.zerodha.com/", accountLink: "https://zerodha.com/open-account" },
  { name: "Upstox", videoId: "u4A7CeKgJWk", loginLink: "https://pro.upstox.com/", accountLink: "https://upstox.com/open-demat-account" },
  { name: "Angel One", videoId: "yTJX8gmMS6o", loginLink: "https://www.angelone.in/login", accountLink: "https://www.angelone.in/open-demat-account" },
  { name: "5Paisa", videoId: "b73IYCONosE", loginLink: "https://login.5paisa.com/", accountLink: "https://www.5paisa.com/open-demat-account" },
  { name: "ICICI Securities", videoId: "RMU-ZG6pvG8", loginLink: "https://secure.icicidirect.com/customer/login", accountLink: "https://www.icicidirect.com/open-demat-account" },
  { name: "HDFC Securities", videoId: "MMtd5BXcNnM", loginLink: "https://www.hdfcsec.com/login", accountLink: "https://www.hdfcsec.com/open-demat-account" },
  { name: "Motilal Oswal", videoId: "5a-QrJoWysA", loginLink: "https://www.motilaloswal.com/login", accountLink: "https://www.motilaloswal.com/open-demat-account" },
  { name: "Sharekhan", videoId: "q4_dlTPAFBk", loginLink: "https://www.sharekhan.com/login", accountLink: "https://www.sharekhan.com/open-demat-account" },
  { name: "Kotak Securities", videoId: "KBeN_jMbJpo", loginLink: "https://www.kotaksecurities.com/login", accountLink: "https://www.kotaksecurities.com/open-demat-account" }
];

const DematTutorials = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredBrokers = brokers.filter((broker) =>
    broker.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", p: 4 }}>
      {/* Title & Back Button */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: "#1976d2", fontSize: "2rem" }}>
          <ArrowBack fontSize="medium" />
        </IconButton>
        <Typography fontSize="30px"  fontWeight="bold" color="primary" sx={{ flexGrow: 1, textAlign: "center" }}>
          Demat Account Creation Tutorials
        </Typography>
        <Box sx={{ width: "10px" }} /> {/* Empty Box to balance the layout */}
      </Box>

      {/* Quote Below Title */}
      <Typography fontSize="19px" color="textSecondary" textAlign="center" mb={1} fontStyle="italic">
        "Investing starts with a single step – Open your Demat account today! to enhance the trading."
      </Typography>
      <br></br>

      {/* Search Bar */}
      <Box display="flex" justifyContent="center" mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search brokers..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <IconButton sx={{ color: "black" }}>
                <Search />
              </IconButton>
            ),
          }}
          sx={{ width: "100%", maxWidth: "1300px" }}
        />
      </Box>
      <br></br>

      {/* Video List (Three videos per row) */}
      <Grid container spacing={3} justifyContent="center">
        {filteredBrokers.length > 0 ? (
          filteredBrokers.map((broker, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" }
                }}
              >
                <CardContent sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                  <PlayCircleOutline color="primary" />
                  <Typography variant="h6" fontWeight="bold">
                    {broker.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="iframe"
                  height="300"
                  src={`https://www.youtube.com/embed/${broker.videoId}`}
                  title={broker.name}
                  allowFullScreen
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Box display="flex" justifyContent="center" gap={1} mt={1}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={broker.loginLink}
                      target="_blank"
                      endIcon={<OpenInNew />}
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      href={broker.accountLink}
                      target="_blank"
                      endIcon={<OpenInNew />}
                    >
                      Open Account
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="textSecondary" textAlign="center" mt={4}>
            No videos found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default DematTutorials;
