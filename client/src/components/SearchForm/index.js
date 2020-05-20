import React from "react";
import "./style.css";

function SearchForm() {
    return (
        <div className="searchForm">
            <h3>Book Search</h3>
            <form>
                <div className="form-group">
                    <label>Book</label>
                    <input className="form-control" id="bookInput" placeholder="Search books" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SearchForm;