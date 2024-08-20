
import React from "react";


function List({ book }) {
  return (
    <div className="listView">
      <div className="container">
        <div className="list-view" >
          <img
            className="imageProduct"
            src={
              book?.volumeInfo?.imageLinks
                ? book?.volumeInfo?.imageLinks.thumbnail
                : "http://books.google.com/books/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            }
            alt={book?.volumeInfo?.title}
          />
          <div className="listViewText">
            <h3>{book?.volumeInfo?.title}</h3>

            <p className="description">{book?.volumeInfo?.description}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default List;
