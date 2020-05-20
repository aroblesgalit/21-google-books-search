import React, { useContext } from "react";
import "./style.css";
import ResultCard from "../ResultCard";
import BookContext from "../../utils/BookContext";

function ResultContainer() {
    const books = useContext(BookContext);

    return (
        <div className="resultContainer">
            <h3>Results</h3>
            {
                books.map(book => 
                    <ResultCard 
                        key={book.image} 
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                    />
                )
            }
        </div>
    );
}

export default ResultContainer;