import React from "react";
import "./style.css";

function SavedCard(props) {
    const { title, authors, description, image, link, deleteBook } = props;

    return (
        <div className="card mb-3 resultCard" key={image}>
            <div className="row no-gutters">
                <div className="col-md-1">
                    <img src={image} className="card-img img-fluid" alt="..." />
                </div>
                <div className="col-md-11">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="text-muted">By {authors.join(", ")}</small></p>
                        <p className="card-text">{description}</p>             
                    </div>
                </div>
                <div className="resultBtns">
                    <a href={link} target="_blank" rel="noopener noreferrer">View</a><button onClick={deleteBook}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default SavedCard;