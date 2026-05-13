import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function PropertyDetails({ properties }) {

  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return <h1>Property not found</h1>;
  }

  // 📲 WhatsApp Message
  const whatsappMessage = `Hello, I am interested in ${property.name} located in ${property.location}.`;

  return (
    <div>

      <Navbar />

      {/*  HERO IMAGE */}
      <div style={styles.heroContainer}>
        <img
          src={property.image}
          alt={property.name}
          style={styles.heroImage}
        />
      </div>

      {/*  CONTENT */}
      <div style={styles.container}>

        {/* TOP */}
        <div style={styles.topRow}>

          <div>
            <h1 style={styles.title}>
              {property.name}
            </h1>

            <p style={styles.location}>
              📍 {property.location}
            </p>
          </div>

          <div style={styles.ratingBox}>
            ⭐ {property.rating}
          </div>

        </div>

        {/* CATEGORY */}
        <span style={styles.category}>
          {property.category}
        </span>

        {/* PRICE */}
        <h2 style={styles.price}>
          ₹{property.price}
          <span style={styles.night}> / night</span>
        </h2>

        {/* DESCRIPTION */}
        <div style={styles.section}>
          <h3>Description</h3>

          <p style={styles.description}>
            Experience luxury and comfort in this premium villa
            designed for relaxing stays with modern amenities,
            beautiful interiors, and scenic surroundings.
          </p>
        </div>

        {/* AMENITIES */}
        <div style={styles.section}>

          <h3>Amenities</h3>

          <div style={styles.amenities}>

  {property.amenities?.map((item, index) => (

    <div
      key={index}
      style={styles.amenity}
    >
      {item}
    </div>

  ))}

</div>
        </div>

        {/* BOOK BUTTON */}
        <a
          href={`https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
          style={styles.bookBtn}
        >
          Book on WhatsApp
        </a>

      </div>

    </div>
  );
}

const styles = {

  heroContainer: {
    width: "100%",
    height: "60vh",
    overflow: "hidden"
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "30px 20px"
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px"
  },

  title: {
    fontSize: "38px",
    marginBottom: "10px"
  },

  location: {
    color: "#666"
  },

  ratingBox: {
    background: "#111",
    color: "white",
    padding: "10px 18px",
    borderRadius: "12px",
    fontWeight: "600"
  },

  category: {
    display: "inline-block",
    marginTop: "20px",
    background: "#f3f3f3",
    padding: "8px 16px",
    borderRadius: "20px"
  },

  price: {
    marginTop: "20px",
    fontSize: "32px"
  },

  night: {
    fontSize: "18px",
    color: "#777"
  },

  section: {
    marginTop: "40px"
  },

  description: {
    color: "#555",
    lineHeight: "1.8"
  },

  amenities: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "20px"
  },

  amenity: {
    background: "#f5f5f5",
    padding: "12px 18px",
    borderRadius: "12px"
  },

  bookBtn: {
    display: "inline-block",
    marginTop: "40px",
    background: "#25D366",
    color: "white",
    padding: "14px 28px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "600"
  }

};

export default PropertyDetails;