import React from "react";
import "./aboutUsFooter.css";
function AboutUsFooter() {
  return (
    <div className="aboutUs">
      <div className="container">
        <p>
          Welcome to our Book Library, a haven for book lovers and knowledge
          seekers alike. Our mission is to provide an extensive collection of
          literature across genres, from timeless classics to contemporary
          masterpieces. Whether you're looking to dive into a new world through
          fiction, explore real-world insights in non-fiction, or simply find
          your next favorite book, our library is designed to inspire and enrich
          your reading journey. With a user-friendly platform and a passion for
          books, we strive to make discovering, reading, and sharing stories an
          enjoyable experience for everyone.
        </p>
      </div>
      <div className="container">
        <div className="list">
          <h2>Library in:</h2>
          <ul>
            <li>Karachi</li>
            <li>Lahore</li>
            <li>Hyderabad</li>
            <li>Islamabad</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AboutUsFooter;
