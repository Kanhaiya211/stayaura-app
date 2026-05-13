import { useState } from "react";
import "./Home.css";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


function Home({ properties }) {
  console.log(properties);
  console.log("HOME DATA:", properties);
  const navigate = useNavigate();
  //  State
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  //  Filter logic
  const filteredProperties = properties.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" ||
        p.location.toLowerCase().includes(location.toLowerCase())) &&
      (price === "" || Number(p.price) <= Number(price))
    );
  });

  //  Limit to 8
  const limitedProperties = filteredProperties.slice(0, 8);

  return (
    <div>
      <Navbar />

      {/*  HERO VIDEO */}
      <div className="hero-section" style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.video}>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div style={styles.darkOverlay}></div>

        {/* Overlay Content */}
        <div className="hero-overlay" style={styles.overlay}>
          <h1 className="hero-heading" style={styles.heading}>
            Luxury Stays
          </h1>
          <p className="hero-subtext" style={styles.subtext}>
            Experience premium villas across India
          </p>

          <button className="hero-btn" style={styles.exploreBtn}>
            Explore Villas
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar" style={styles.filterBar}>
        <input
          className="filter-input"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />

        <input
          className="filter-input"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Max Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* PROPERTY GRID */}
      <div id="properties" style={{ padding: "20px" }}>
        <h1 style={styles.title}>StayAura</h1>
        <h2 style={styles.subtitle}>Explore Villas</h2>

        {filteredProperties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <>
            <div className="property-grid">
              {limitedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>

            {/*  View All Button */}
            {filteredProperties.length > 8 && (
              <div style={styles.viewAllWrapper}>
                <button
                  style={styles.viewAllBtn}
                  onClick={() => (window.location.href = "/properties")}
                >
                  View All Properties
                </button>
              </div>
            )}
          </>
        )}
      </div>
      
    </div>
  );
}
const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "90vh",
    overflow: "hidden"
  },

  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  darkOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)"
  },

  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center"
  },

  heading: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "10px"
  },

  subtext: {
    fontSize: "18px",
    opacity: 0.9
  },

  exploreBtn: {
    marginTop: "20px",
    padding: "12px 28px",
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "25px",
    cursor: "pointer",
    backdropFilter: "blur(4px)"
  },

  // filterBar: {
  //   display: "flex",
  //   gap: "15px",
  //   padding: "20px",
  //   justifyContent: "center",
  //   backgroundColor: "#fafafa"
  // },

  input: {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    outline: "none",
    width: "200px"
  },

  // grid: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(2, 1fr)",
  //   gap: "20px"
  // },

  title: {
    fontSize: "26px",
    fontWeight: "600"
  },

  subtitle: {
    color: "#666",
    marginBottom: "20px"
  },

  viewAllWrapper: {
    textAlign: "center",
    marginTop: "30px"
  },

  viewAllBtn: {
    padding: "12px 30px",
    fontSize: "16px",
    backgroundColor: "#111",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer"
  }
};


export default Home;