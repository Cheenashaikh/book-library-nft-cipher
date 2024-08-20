import React from "react";

function BookCard({ book }) {
  return (
    <>
      <div className="book-card">
        <img
          className="productImage"
          src={
            book?.volumeInfo?.imageLinks
              ? book?.volumeInfo?.imageLinks.thumbnail
              : "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          }
          alt={book?.volumeInfo?.title}
        />

        <h3 className="cardviewHeading">{book?.volumeInfo?.title}</h3>
        <p>{book?.volumeInfo?.authors?.join(",")}</p>
      </div>
      <div className="hoverElements">
        <h3>Additional Collection</h3>
        <h4>Views:243M</h4>
      </div>
    </>
  );
}

export default BookCard;
