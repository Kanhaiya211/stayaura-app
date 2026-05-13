import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar" style={styles.navbar}>
      {/* Logo */}
      <div
        style={{
          ...styles.logo,
          ...(location.pathname === "/" && styles.activeLink)
        }}
        onClick={() => navigate("/")}
      >
        StayAura
      </div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
      {/* Menu */}
      <div
  className={`menu ${menuOpen ? "active" : ""}`}
  style={styles.menu}
>
        <span style={styles.link}>
          About
        </span>

        <span
          style={{
            ...styles.link,
            ...(location.pathname === "/properties" && styles.activeLink)
          }}
          onClick={() => navigate("/properties")}
        >
          Properties
        </span>

        <span style={styles.link}>Career</span>
        <span style={styles.link}>Blogs</span>
      </div>

      {/* Button */}
      <button style={styles.button}>
        Contact Us
      </button>

    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textDecoration: "none",
    padding: "18px 60px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee"
  },
  activeLink: {
    color: "#111",
    fontWeight: "600",
    borderBottom: "2px solid #111"
  },
  logo: {
    fontWeight: "700",
    fontSize: "20px",
    letterSpacing: "1px",
    textDecoration: "none",
    color: "#111"
  },

  menu: {
    display: "flex",
    gap: "35px"
  },

  link: {
    textDecoration: "none",     
    color: "#444",
    cursor: "pointer",         
    fontWeight: "500",
    transition: "0.3s"
  },

  button: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 22px",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s"
  }
};

export default Navbar;