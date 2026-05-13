import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Admin from "./pages/Admin";
import Properties from "./pages/Properties";
function App() {

  
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem("properties");
    return saved ? JSON.parse(saved) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home properties={properties} />} />
        <Route path="/property/:id" element={<PropertyDetails properties={properties} />} />
        <Route path="/admin" element={<Admin properties={properties} setProperties={setProperties} />} />
        <Route path="/properties" element={<Properties properties={properties} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;