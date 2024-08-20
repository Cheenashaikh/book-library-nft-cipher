import React from "react";
import { popularBook } from "../../utils/popular-books/data";
import "./book.css";

function FamousBook({ heading, data }) {

    const [firstPart, SecondPart] = heading.split(' ');
    return (



        <div className="book">
            <div className="container">

                <h2 className="heading"><span>{firstPart}</span>  {SecondPart}</h2>
                <div className="bookData">
                    {data.map((book) => {
                        return (
                            <div className="data" key={book.id}>
                                <img src={book.img} alt="popular-book" />
                                <p>{book.text}</p>



                            </div>

                        )


                    })}

                </div>
            </div>
        </div>


    );
}

export default FamousBook

