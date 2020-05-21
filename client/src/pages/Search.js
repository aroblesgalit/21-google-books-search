import React, { useState, useRef } from "react";
// import SearchForm from "../components/SearchForm";
import ResultContainer from "../components/ResultContainer";
import "../components/SearchForm/style.css";
import API from "../utils/API";
import BookContext from "../utils/BookContext";

function Search() {

    const [books, setBooks] = useState([]);
    const searchQuery = useRef();

    function searchBooks(e) {
        e.preventDefault();

        API.getBooksByQuery(searchQuery.current.value)
            .then(res => {
                setBooks(res)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="uk-width-expand searchContainer">
            <div className="searchForm">
                <h3>Book Search</h3>
                <form className="uk-search uk-width-expand" onSubmit={searchBooks}>
                    <a href="" className="uk-search-icon-flip" uk-search-icon="true" onClick={searchBooks}></a>
                    <input className="uk-search-input" type="search" placeholder="Search..." ref={searchQuery} />
                </form>
            </div>
            <BookContext.Provider value={books}>
                <ResultContainer />
            </BookContext.Provider>
        </div>
    );
}

export default Search;