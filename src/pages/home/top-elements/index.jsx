import React from "react";
import "./topElements.css";

function TopElements({ data }) {
  return (
    <div className="topImages">
      {data.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.imgUrl} alt={book.title} />
        </div>
      ))}
    </div>
  );
}

export default TopElements;
