import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FaRegPlayCircle, FaInfoCircle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import "./App.css"; 
import Login from "./Login";
import Register from "./Register";
import Asset from "./Asset";
import Dashboard from "./Dashboard";
import Demat from "./Demat";
import Bse from "./Bse";
import Nse from "./Nse";
import BuyStock from "./Stock";
import AboutUs from "./Aboutus";
import Userdetails from "./Profile";
import Budget from "./Budget";
import NewspaperUI from "./Market";
const Header = () => {
  return (
    <header className="header">
      <div className="logo" style={{ display: "flex", alignItems: "center" }}>
        <FaChartLine size={24} style={{ marginRight: "8px", color: "#1e40af" }} />
        TradePulse
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Dashboard</Link>
        <Link to="/market" className="nav-link">Market</Link>
        <Link to="/register" className="nav-link">Portfolio</Link>
        <Link to="/login" className="nav-link">Budget</Link>
        <Link to="/aboutus" className="nav-link">Learn</Link>
      </nav>
    </header>
  );
};

const Home = () => (
  <div className="container">
    <div className="main">
      <div className="overlay"></div>
      <div className="content">
        <h2 className="title">TradePulse: Smart Insights, Smarter Trades</h2>
        <p className="paragraph">
          Empowering traders with real-time analytics, expert market trends, and smart trading strategies 
          to maximize profits and minimize risks. Stay ahead of the curve with timely updates and in-depth 
          market insights for informed decision-making.
        </p>
        <div className="button-container">
          <Link to="/register">
            <button className="button">
              <FaRegPlayCircle size={20} />
              Get Started
            </button>
          </Link>
          <Link to="/aboutus">
            <button className="button">
              <FaInfoCircle size={20} />
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const location = useLocation(); // Get the current route path

  return (
    <div className="body">
      {/* Hide header on the Asset page */}
      {location.pathname !== "/asset" && location.pathname !== "/market" &&location.pathname !== "/db" && location.pathname !== "/budget" && location.pathname !== "/demat" && location.pathname !== "/bse" && location.pathname !== "/profile" &&location.pathname !== "/nse"&& location.pathname !== "/stock"&& <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/db" element={<Dashboard/>}/>
        <Route path="/demat" element={<Demat/>}/>
        <Route path="/bse" element={<Bse/>}/>
        <Route path="/nse" element={<Nse/>}/>
        <Route path="/stock" element={<BuyStock/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/profile" element={<Userdetails/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/market" element={<NewspaperUI/>}/>
      </Routes>
    </div>
  );
};

export default App;
