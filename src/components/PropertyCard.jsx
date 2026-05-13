import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/property/${property.id}`)}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* IMAGE */}
      <div style={styles.imageContainer}>
        <img src={property.image} style={styles.image} />

        {/*  Wishlist */}
        <div
          style={styles.heart}
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
        >
          {liked ? "❤️" : "🤍"}
        </div>

        {/*  Badge */}
        <span style={styles.category}>
  {property.category}
</span>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <div style={styles.topRow}>
          <h3 style={styles.title}>{property.name}</h3>
          <span style={styles.rating}>
  ⭐ {property.rating}
</span>
        </div>

        <p style={styles.location}>{property.location}</p>

        <div style={styles.bottom}>
          <span style={styles.price}>₹{property.price}</span>
          <span style={styles.night}> / night</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "18px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "0.3s"
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    height: "220px",
    overflow: "hidden"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.4s"
  },

  heart: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "white",
    borderRadius: "50%",
    padding: "6px",
    cursor: "pointer"
  },

 category: {
  position: "absolute",
  bottom: "12px",
  left: "12px",
  background: "rgba(0,0,0,0.7)",
  backdropFilter: "blur(6px)",
  color: "white",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "500"
},

  content: {
    padding: "15px"
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: "18px",
    fontWeight: "600"
  },

  rating: {
    fontSize: "14px",
    color: "#444"
  },

  location: {
    color: "#777",
    fontSize: "14px",
    margin: "5px 0 10px"
  },

  bottom: {
    display: "flex",
    alignItems: "center"
  },

  price: {
    fontWeight: "600",
    fontSize: "16px"
  },

  night: {
    color: "#777",
    fontSize: "14px"
  }
};

export default PropertyCard;  