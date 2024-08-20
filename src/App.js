import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Home from "./pages/home";

import Footer from "./components/layout/footer";
import HomeOne from "./pages/homeOne";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e);
  };

  return (
    <div className="body">
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />

        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/product" element={<Home search={search} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
