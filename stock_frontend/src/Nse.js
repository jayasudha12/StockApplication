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
    
    { 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinwfHyut8G8WbRWlVAEPl0ckwseyvj71BSA&s", 
        name: "Chevron Corporation", 
        profit: "$14.1 billion", 
        stockPrice: "$110.65", 
        marketCap: "$190 billion", 
        buyLink: "https://www.chevron.com" 
      },
      { 
        logo: "https://logos-world.net/wp-content/uploads/2022/03/Cigna-Symbol.png", 
        name: "Cigna", 
        profit: "$8.9 billion", 
        stockPrice: "$230.55", 
        marketCap: "$77 billion", 
        buyLink: "https://www.cigna.com" 
      },
      { 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvZJcFSuBzTHzbCAs5Yqj3MQMi8yF6_hlWw&s", 
        name: "Ford Motor Company", 
        profit: "$7.5 billion", 
        stockPrice: "$14.85", 
        marketCap: "$60 billion", 
        buyLink: "https://www.ford.com" 
      },
      { 
        logo: "https://i.pinimg.com/736x/d4/28/e3/d428e39bb02724f83b751f3ca7634b43.jpg", 
        name: "Bank of America", 
        profit: "$31.5 billion", 
        stockPrice: "$40.75", 
        marketCap: "$310 billion", 
        buyLink: "https://www.bankofamerica.com" 
      },
      { 
        logo: "https://cdni.autocarindia.com/ExtraImages/20210112073641_GM_Logo.jpg", 
        name: "General Motors", 
        profit: "$10.3 billion", 
        stockPrice: "$45.32", 
        marketCap: "$65 billion", 
        buyLink: "https://www.gm.com" 
      },
      { 
        logo: "https://brandlogos.net/wp-content/uploads/2022/07/elevance_health-logo_brandlogos.net_fwi2w-512x512.png", 
        name: "Elevance Health", 
        profit: "$9.8 billion", 
        stockPrice: "$400.23", 
        marketCap: "$94 billion", 
        buyLink: "https://www.elevancehealth.com" 
      },{ 
        
      logo: "https://crystalpng.com/wp-content/uploads/2025/01/new-Walmart-logo-02.png", 
      name: "Walmart", 
      profit: "$13.7 billion", 
      stockPrice: "$150.23", 
      marketCap: "$420 billion", 
      buyLink: "https://www.walmart.com" 
    },
    { 
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg", 
      name: "Amazon", 
      profit: "$21.3 billion", 
      stockPrice: "$3,250.00", 
      marketCap: "$1.6 trillion", 
      buyLink: "https://www.amazon.com" 
    },
    { 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", 
      name: "Apple", 
      profit: "$57.4 billion", 
      stockPrice: "$145.09", 
      marketCap: "$2.4 trillion", 
      buyLink: "https://www.apple.com" 
    },
    { 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsTNWQe6wE8YmxeKrdy5TnMPeZlbVQBDOLg&s", 
      name: "Berkshire Hathaway", 
      profit: "$42.5 billion", 
      stockPrice: "$420,000.00", 
      marketCap: "$650 billion", 
      buyLink: "https://www.berkshirehathaway.com" 
    },
    { 
      logo: "https://brandlogos.net/wp-content/uploads/2021/12/cvs_health-brandlogo.net_.png", 
      name: "CVS Health", 
      profit: "$7.2 billion", 
      stockPrice: "$85.67", 
      marketCap: "$110 billion", 
      buyLink: "https://www.cvshealth.com" 
    },
    { 
      logo: "https://i.pinimg.com/736x/a0/f6/19/a0f61973fa8752d20451bba9046d293c.jpg", 
      name: "ExxonMobil", 
      profit: "$23.0 billion", 
      stockPrice: "$60.12", 
      marketCap: "$250 billion", 
      buyLink: "https://corporate.exxonmobil.com" 
    },
    { 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Alphabet_Inc_Logo_2015.svg/2560px-Alphabet_Inc_Logo_2015.svg.png", 
      name: "Alphabet Inc.", 
      profit: "$40.3 billion", 
      stockPrice: "$2,800.00", 
      marketCap: "$1.8 trillion", 
      buyLink: "https://abc.xyz" 
    },
    { 
      logo: "https://companieslogo.com/img/orig/MCK-7a68ba28.png?t=1720244492", 
      
      name: "McKesson Corporation", 
      profit: "$3.9 billion", 
      stockPrice: "$210.45", 
      marketCap: "$32 billion", 
      buyLink: "https://www.mckesson.com" 
    },
    { 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUTsB56lNBrhoTM8cqcUBnZ0FdnlS5VOvSw&s", 
      name: "Cencora", 
      profit: "$2.1 billion", 
      stockPrice: "$95.32", 
      marketCap: "$15 billion", 
      buyLink: "https://www.cencora.com" 
    },
    { 
      logo: "https://images.seeklogo.com/logo-png/3/2/costco-wholesale-logo-png_seeklogo-35878.png", 
      name: "Costco", 
      profit: "$5.0 billion", 
      stockPrice: "$400.00", 
      marketCap: "$180 billion", 
      buyLink: "https://www.costco.com" 
    },
    { 
      logo: "data:image/png;base64,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", 
      name: "JPMorgan Chase", 
      profit: "$36.4 billion", 
      stockPrice: "$160.75", 
      marketCap: "$480 billion", 
      buyLink: "https://www.jpmorganchase.com" 
    },
    { 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1A9JBtnms_veY-dqZpmlhjsbEWFcjZe_SmQ&s", 
      name: "Microsoft", 
      profit: "$61.3 billion", 
      stockPrice: "$320.50", 
      marketCap: "$2.7 trillion", 
      buyLink: "https://www.microsoft.com" 
    },
    { 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53IBK0oM5lPchKeCaIF47gs4X_wzzJz7r9g&s", 
      name: "Cardinal Health", 
      profit: "$2.7 billion", 
      stockPrice: "$62.45", 
      marketCap: "$18 billion", 
      buyLink: "https://www.cardinalhealth.com" 
    },
    
    
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
  
  const Nse = () => {
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
    src="https://static.vecteezy.com/system/resources/previews/028/171/715/non_2x/nse-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" 
    alt="Stock Logo" 
    style={{ height: "80px", width: "80px" }} 
  />
  <h1 style={{ color: "#1976D2", margin: 0, textTransform: "uppercase" }}>
    NSE Top 20 Companies
  </h1>
</HeaderContainer>

  
        <p style={{ fontSize: "16px", color: "#555", marginTop: "10px" }}>
          Explore the top 20 companies in the National Stock Exchange (NSE). Check
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
  
  export default Nse;
  