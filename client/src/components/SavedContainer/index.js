import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import SavedCard from "../SavedCard";
// import BookContext from "../../utils/BookContext";
import API from "../../utils/API";

function SavedContainer() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <div className="resultContainer">
            <h3>Saved</h3>
            {books.length ? (
                books.map(book =>
                    <SavedCard
                        key={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        deleteBook={() => deleteBook(book._id)}
                    />
                )
            ) : (
                    <p>No Results to Display</p>
                )}
        </div>
    );
}

export default SavedContainer;