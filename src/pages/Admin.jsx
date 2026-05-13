import { useState } from "react";

function Admin({ properties, setProperties }) {

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
    category: "",
    rating: "",
    amenities: []
  });
  const amenitiesList = [
    "Swimming Pool",
    "WiFi",
    "Parking",
    "Mountain View",
    "Air Conditioning",
    "Pet Friendly"
  ];

  const [editId, setEditId] = useState(null);

  // Start Edit
  const startEdit = (property) => {

    setForm({
      ...property,
      amenities: property.amenities || []
    });

    setEditId(property.id);
  };

  //  Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleAmenityChange = (amenity) => {

    if (form.amenities.includes(amenity)) {

      setForm({
        ...form,
        amenities: form.amenities.filter(
          (a) => a !== amenity
        )
      });

    } else {

      setForm({
        ...form,
        amenities: [
          ...form.amenities,
          amenity
        ]
      });

    }
  };

  //  Add / Update Property
  const addProperty = () => {

    if (
      !form.name ||
      !form.location ||
      !form.price ||
      !form.image ||
      !form.category ||
      !form.rating ||
      form.amenities.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }

    // Format Data
    const formattedProperty = {
      ...form,

      price: Number(form.price),
      rating: Number(form.rating),

      amenities: form.amenities
    };

    if (editId) {

      // UPDATE
      const updated = properties.map((p) =>
        p.id === editId
          ? { ...formattedProperty, id: editId }
          : p
      );

      setProperties(updated);

      setEditId(null);

    } else {

      // ➕ ADD
      const newProperty = {
        id: Date.now(),
        ...formattedProperty
      };

      console.log("ADMIN ADD:", newProperty);

      setProperties([
        ...properties,
        newProperty
      ]);
    }

    // RESET FORM
    setForm({
      name: "",
      location: "",
      price: "",
      image: "",
      category: "",
      rating: "",
      amenities: []
    });
  };

  // Delete
  const deleteProperty = (id) => {

    const updated = properties.filter(
      (p) => p.id !== id
    );

    setProperties(updated);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Admin Panel</h1>

      {/* FORM */}
      <div style={{ marginBottom: "20px" }}>

        <input
          name="name"
          placeholder="Property Name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="category"
          placeholder="Category (Luxury, Budget, Premium)"
          value={form.category}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="rating"
          placeholder="Rating (e.g. 4.5)"
          value={form.rating}
          onChange={handleChange}
        />
        <br /><br />
        <div style={{ marginBottom: "20px" }}>

          <h3>Select Amenities</h3>

          {amenitiesList.map((item) => (

            <label
              key={item}
              style={{
                display: "block",
                marginBottom: "8px"
              }}
            >

              <input
                type="checkbox"
                checked={form.amenities.includes(item)}
                onChange={() =>
                  handleAmenityChange(item)
                }
              />

              {" "} {item}

            </label>

          ))}

        </div>
        <br />

        <button onClick={addProperty}>
          {editId
            ? "Update Property"
            : "Add Property"}
        </button>

      </div>

      <hr />

      {/*  PROPERTY LIST */}
      <h2>All Properties</h2>

      {properties.length === 0 ? (

        <p>No properties added yet</p>

      ) : (

        properties.map((p) => (

          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px"
            }}
          >

            <h3>{p.name}</h3>

            <p>{p.location}</p>

            <p>₹{p.price}</p>

            <p>
              <strong>Category:</strong> {p.category}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {p.rating}
            </p>

            {/*  Amenities */}
            <p>
              <strong>Amenities:</strong>{" "}
              {p.amenities?.join(", ")}
            </p>

            <button
              onClick={() => deleteProperty(p.id)}
            >
              Delete
            </button>

            <button
              onClick={() => startEdit(p)}
            >
              Edit
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default Admin;