import React, { useState } from "react";

import "./search.css"

function SearchBar({ fun, inputValue, handleButtonClick }) {
  return (

    <div className="search-bar">
      <form>
        <input
          className="search"
          placeholder="search"
          type="search"
          value={inputValue}
          onChange={fun}

        />
        {/* <button onClick={handleButtonClick}>Search</button> */}
      </form>
    </div>


  );
}
export default SearchBar;