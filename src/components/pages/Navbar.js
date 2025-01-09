import React, { useContext, useState } from "react";
import "../css/Style.css";
import logo from "../images/logo.jpg";
import { useNavigate, NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContact";
import { toast } from "react-toastify";
export default function Navbar() {
  const navigate = useNavigate();

  const { toggleTheme, theme } = useContext(ThemeContext);
  const handleButton = () => {
    navigate("/razorpay");
  };

  // const [query, setQuery] = useState('');
  // console.log(query);
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (query.trim()) {
  //     navigate(`/search?q=${encodeURIComponent(query)}`);
  //   }
  // };

  const ThemeChanger = () => {
    toggleTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";
    toast.success(nextTheme + " mode enable");
  };

  return (
    <>
      <nav
        id="navId"
        className={`navbar  navbar-expand-lg navbar-light bg-${theme}`}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="AL MEHDI Logo" className="brand-logo" />
            <span className="brand-text">AL MEHDI</span>
            <span
              className="subtitle"
              style={{ color: theme === "light" ? " " : "#fff" }}
            >
              Welfare Association
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${theme}-theme`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  style={{ color: theme === "light" ? " " : "#fff" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: theme === "light" ? " " : "#fff" }}
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/healthcare">
                      Healthcare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/education">
                      Education
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/relief-work">
                      Relief Work
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  style={{ color: theme === "light" ? " " : "#fff" }}
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  style={{ color: theme === "light" ? " " : "#fff" }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  style={{ color: theme === "light" ? " " : "#fff" }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <form className="d-flex">
              <input
                className={`form-control me-2 ${
                  theme === "light" ? "light-mode" : "dark-mode"
                }`}
                type="search"
                placeholder="Search Here"
                // onSubmit={handleSearch}
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                style={{
                  backgroundColor: theme === "light" ? "white" : "#212529",
                  color: theme === "light" ? "black" : "white",
                  border: "1px solid white",
                  borderRadius: "30px",
                }}
              />
            </form>
          </div>
          <NavLink
            to="/razorpay"
            onClick={handleButton}
            className={`btn donate-btn`}
            style={{
              backgroundColor: "#007bff",
              color: theme === "light" ? " " : "#fff",
            }}
          >
            Donate
          </NavLink>
          <div className={`mx-3 mt-2 form-check form-switch`}>
            <input
              className={`form-check-input ${theme === "light" ? "light-theme" : "dark-theme"}`}
              type="checkbox"
              onChange={ThemeChanger}
              checked={theme === "dark"}
              style={{
                color: theme === "light" ? "black" : "white",
              }}
              role="switch"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
