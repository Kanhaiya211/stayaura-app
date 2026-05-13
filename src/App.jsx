import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { useState, useEffect } from "react";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Admin from "./pages/Admin";
import Properties from "./pages/Properties";

import Footer from "./components/Footer";

function AppContent() {

  const location = useLocation();

  const hideFooter =
    location.pathname.startsWith("/admin");

  const [properties, setProperties] = useState(() => {

    const saved =
      localStorage.getItem("properties");

    return saved
      ? JSON.parse(saved)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "properties",
      JSON.stringify(properties)
    );

  }, [properties]);

  return (
    <>

      <Routes>

        <Route
          path="/"
          element={<Home properties={properties} />}
        />

        <Route
          path="/property/:id"
          element={
            <PropertyDetails
              properties={properties}
            />
          }
        />

        <Route
          path="/properties"
          element={
            <Properties properties={properties} />
          }
        />

        <Route
          path="/admin"
          element={
            <Admin
              properties={properties}
              setProperties={setProperties}
            />
          }
        />

      </Routes>

      {!hideFooter && <Footer />}

    </>
  );
}

function App() {

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;