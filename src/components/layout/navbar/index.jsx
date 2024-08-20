import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "../../../pages/home/search";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onSearch(inputValue);
    navigate("/product");
  };

  return (
    <header className="headerDesign">
      <div className="container">
        <h2>
          <span>Book</span>Library<span>.</span>{" "}
        </h2>
        <p>
          <span>Discover </span>Read <span>Explore</span>
        </p>
      </div>
      <div className="container">
        <ul className="horizontal">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Service">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="search-container">
          <SearchBar
            fun={handleInputChange}
            inputValue={inputValue}
            handleButtonClick={handleButtonClick}
          />
          <button onClick={handleButtonClick}>Search</button>
        </div>
      </div>
      <div className="container"></div>
    </header>
  );
}

export default Navbar;
