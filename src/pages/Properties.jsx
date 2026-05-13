import { useState } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import "../pages/Home.css";

function Properties({ properties }) {

  // States
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  //  Filter Logic
  let filteredProperties = properties.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" ||
        p.location.toLowerCase().includes(location.toLowerCase())) &&
      (price === "" || Number(p.price) <= Number(price))
    );
  });

  // Sorting
  if (sort === "low") {
    filteredProperties.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProperties.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProperties.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>

      <Navbar />

      {/*  FILTER BAR */}
      <div className="filter-bar">

        <input
          className="filter-input"
          placeholder="Search villas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          className="filter-input"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="filter-input"
          placeholder="Max Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/*  SORTING */}
        <select
          className="filter-input"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>

      </div>

      {/*  PROPERTIES */}
      <div style={{ padding: "20px" }}>

        <h1 style={styles.title}>All Properties</h1>

        {filteredProperties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="property-grid">
            {filteredProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

const styles = {
  title: {
    fontSize: "28px",
    marginBottom: "20px"
  }
};

export default Properties;