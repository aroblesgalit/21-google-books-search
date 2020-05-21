import React, { useRef, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function SearchForm() {

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
        <div className="searchForm">
            <h3>Book Search</h3>
            <form className="uk-search uk-search-default uk-width-expand" onSubmit={searchBooks}>
                <a href="" className="uk-search-icon-flip" uk-search-icon="true" onClick={searchBooks}></a>
                <input className="uk-search-input" type="search" placeholder="Search..." ref={searchQuery} />
            </form>
        </div>
    );
}

export default SearchForm;