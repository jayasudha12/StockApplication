import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { InputAdornment } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const companies = [
  { logo: "https://companieslogo.com/img/orig/RELIANCE.NS-bb9f8a1b.png?t=1720244493", name: "Reliance Industries", profit: "₹53,739 Cr", stockPrice: "₹2,150", marketCap: "₹14,50,000 Cr", buyLink: "https://www.ril.com/" },
  { logo: "https://brandlogos.net/wp-content/uploads/2022/04/tata_consultancy_services-logo-brandlogos.net_.png", name: "Tata Consultancy Services", profit: "₹38,327 Cr", stockPrice: "₹3,250", marketCap: "₹12,00,000 Cr", buyLink: "https://nextstep.tcs.com/campus/" },
  { logo: "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg", name: "HDFC Bank", profit: "₹45,997 Cr", stockPrice: "₹1,520", marketCap: "₹9,80,000 Cr", buyLink: "https://tradingplatform.com/hdfc" },
  { logo: "https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo.png", name: "Infosys", profit: "₹26,124 Cr", stockPrice: "₹1,750", marketCap: "₹7,80,000 Cr", buyLink: "https://tradingplatform.com/infosys" },
  { logo: "https://5.imimg.com/data5/SELLER/Default/2022/9/FF/PT/VI/154377177/icic-bank-tender-information-500x500.jpg", name: "ICICI Bank", profit: "₹31,203 Cr", stockPrice: "₹970", marketCap: "₹6,50,000 Cr", buyLink: "https://tradingplatform.com/icici" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1xoWuB_9x62z_lgxHaQchwPS7bBYO0VXWA&s", name: "State Bank of India", profit: "₹40,834 Cr", stockPrice: "₹580", marketCap: "₹5,50,000 Cr", buyLink: "https://tradingplatform.com/sbi" },
  { logo: "https://1000logos.net/wp-content/uploads/2020/07/Bajaj-logo.jpg", name: "Bajaj Finance", profit: "₹22,100 Cr", stockPrice: "₹7,100", marketCap: "₹4,30,000 Cr", buyLink: "https://tradingplatform.com/bajaj" },
  { logo: "https://i.pinimg.com/736x/1d/8b/78/1d8b78b87d5628e626a886fb57d1150f.jpg", name: "HDFC Life", profit: "₹1,500 Cr", stockPrice: "₹650", marketCap: "₹1,10,000 Cr", buyLink: "https://tradingplatform.com/hdfclife" },
  {
    "logo": "https://download.logo.wine/logo/Bharti_Airtel/Bharti_Airtel-Logo.wine.png",
    "name": "Bharti Airtel",
    "profit": "₹8,000 Cr",
    "stockPrice": "₹870",
    "marketCap": "₹6,00,000 Cr",
    "buyLink": "https://www.ril.com/"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEpk9UdvHVVznzAzkJk4ra_xcgkcjjP8owQ&s",
    "name": "Larsen & Toubro",
    "profit": "₹12,800 Cr",
    "stockPrice": "₹2,940",
    "marketCap": "₹4,10,000 Cr",
    "buyLink": ""
  },
  {
    "logo": "https://download.logo.wine/logo/ITC_Limited/ITC_Limited-Logo.wine.png",
    "name": "ITC",
    "profit": "₹19,200 Cr",
    "stockPrice": "₹450",
    "marketCap": "₹5,60,000 Cr",
    "buyLink": "https://tradingplatform.com/itc"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3viapAJMENP6j0Gux99BoBUZq91v7OZD1DA&s",
    "name": "Asian Paints",
    "profit": "₹8,900 Cr",
    "stockPrice": "₹3,150",
    "marketCap": "₹3,30,000 Cr",
    "buyLink": "https://tradingplatform.com/asianpaints"
  },
  {
    "logo": "data:image/png;base64,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",
    "name": "Adani Enterprises",
    "profit": "₹6,500 Cr",
    "stockPrice": "₹2,750",
    "marketCap": "₹3,90,000 Cr",
    "buyLink": "https://tradingplatform.com/adani"
  },
  {
    "logo": "https://media.licdn.com/dms/image/v2/C4E12AQHw3bPisn1x0g/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1595858405291?e=1746057600&v=beta&t=oz1Zqlmhyn4twvNg5M4K-4rNzTtKmQB2HpSBaKNKH0U",
    "name": "Hindustan Unilever",
    "profit": "₹10,500 Cr",
    "stockPrice": "₹2,650",
    "marketCap": "₹5,40,000 Cr",
    "buyLink": "https://tradingplatform.com/hul"
  },
  {
    "logo": "https://ntpc.co.in/sites/default/files/inline-images/OrganisationalPride3.png",
    "name": "NTPC",
    "profit": "₹16,500 Cr",
    "stockPrice": "₹285",
    "marketCap": "₹3,00,000 Cr",
    "buyLink": "https://tradingplatform.com/ntpc"
  },
  
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYm3oqC1JM9PdeySJZ_2OIkyf6D8Lf27BnA&s",
    "name": "Sun Pharma",
    "profit": "₹11,000 Cr",
    "stockPrice": "₹1,230",
    "marketCap": "₹3,60,000 Cr",
    "buyLink": "https://tradingplatform.com/sunpharma"
  },
  {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    "name": "Wipro",
    "profit": "₹12,450 Cr",
    "stockPrice": "₹600",
    "marketCap": "₹3,20,000 Cr",
    "buyLink": "https://tradingplatform.com/wipro"
  },
  
  {
    "logo": "https://static.vecteezy.com/system/resources/previews/020/336/714/non_2x/maruti-suzuki-logo-maruiti-icon-free-free-vector.jpg",
    "name": "Maruti Suzuki",
    "profit": "₹14,900 Cr",
    "stockPrice": "₹9,600",
    "marketCap": "₹3,10,000 Cr",
    "buyLink": "https://tradingplatform.com/maruti"
  }
];

const HeaderContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    position: "relative",
    width: "100%", // Increased width
  });
  
  const BackButton = styled(IconButton)({
    position: "absolute",
    left: 0,
  });
  
  const StyledTableContainer = styled(TableContainer)({
    marginTop: 10,
    borderRadius: 8,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    maxWidth: "1300px",
    margin: "auto",
  });
  
  const StyledTableHead = styled(TableHead)({
    backgroundColor: "#1976D2",
    maxHeight: "100px",
     // Convert text to uppercase
    
  });
  const StyledTableCell1 = styled(TableCell)({
    padding: "6px 12px",
    fontWeight: "bold",
   // Make header text bold
    color: "white",
    

  });
  
  
  const StyledTableCell = styled(TableCell)({
    padding: "6px 12px",
   // Make header text bold
    color: "black"
  });
  
  const StyledTableRow = styled(TableRow)(({ index }) => ({
    backgroundColor: index % 2 !== 0 ? "#f5f5f5" : "white", // Light gray for even rows
  }));
  
  const Bse = () => {
    const [search, setSearch] = useState("");
    const filteredCompanies = companies.filter((company) =>
      company.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#fff",
          minHeight: "100vh",
        }}
      >
        <HeaderContainer style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <BackButton onClick={() => window.history.back()} color="primary">
    <ArrowBackIcon />
  </BackButton>
  <img 
    src="https://t4.ftcdn.net/jpg/04/98/12/95/360_F_498129585_cXk6psFdH4zjTyZOuTGYsqjx1wTxfmwY.jpg" 
    alt="Stock Logo" 
    style={{ height: "40px", width: "40px" }} 
  />
  <h1 style={{ color: "#1976D2", margin: 0, textTransform: "uppercase" }}>
    BSE Top 20 Companies
  </h1>
</HeaderContainer>

  
        <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
          Explore the top 20 companies in the Bombay Stock Exchange (BSE). Check
          stock prices, profits, and buy stocks directly from trusted trading
          platforms.
        </p>
        <br />
  
        <TextField
  label="Search Company"
  variant="outlined"
  size="small"
  style={{ marginBottom: "10px", width: "80%" }}
  onChange={(e) => setSearch(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon style={{ color: "#1976D2" }} />
      </InputAdornment>
    ),
  }}
/>
          
        <br />
        <br />
  
        <StyledTableContainer component={Paper}>
          <Table>
            <StyledTableHead>
              <TableRow>
                <StyledTableCell1>LOGO</StyledTableCell1>
                <StyledTableCell1>COMPANY</StyledTableCell1>
                <StyledTableCell1>PROFIT</StyledTableCell1>
                <StyledTableCell1>STOCK PRICE</StyledTableCell1>
                <StyledTableCell1>MARKET PRICE</StyledTableCell1>
                <StyledTableCell1>BUY</StyledTableCell1>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {filteredCompanies.map((company, index) => (
                <StyledTableRow key={index} index={index} hover>
                  <StyledTableCell>
                    <img
                      src={company.logo}
                      alt={company.name}
                      width="50"
                      height="50"
                      style={{ borderRadius: "50%" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{company.name}</StyledTableCell>
                  <StyledTableCell>{company.profit}</StyledTableCell>
                  <StyledTableCell>{company.stockPrice}</StyledTableCell>
                  <StyledTableCell>{company.marketCap}</StyledTableCell>
                  <StyledTableCell>
                    <Button variant="contained" color="primary" href={company.buyLink} target="_blank">
                      Buy Stock
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
  
        <p style={{ fontSize: "14px", color: "#777", marginTop: "20px" }}>
          Stock prices are subject to market changes. Please check with your
          financial advisor before making investment decisions.
        </p>
      </div>
    );
  };
  
  export default Bse;
  