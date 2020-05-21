import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
// import BookContext from "../../utils/BookContext";

function ResultCard(props) {
    const { title, authors, description, image, link } = props;

    const [book] = useState({
        title: title,
        authors: authors,
        description: description,
        image: image,
        link: link
    });

    function saveBook(book) {
        API.saveBook(book)
            .then(() => console.log("Book Saved!"))
            .catch(err => console.log(err));
    }



    return (
        <article className="uk-comment resultCard" key={image}>
            <div className="uk-comment-header uk-grid-medium uk-flex-middle topInfo" uk-grid="true">
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar" src={image} width="80" height="80" alt="" />
                </div>
                <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove">{title}</h4>
                    <p className="uk-comment-meta uk-margin-remove-top">
                        by {authors ? authors.join(", ") : "uknown"}
                    </p>
                    <div>
                        <button className="uk-button uk-button-default" onClick={() => saveBook(book)}>Save</button>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-default margin-right-small">View</a>
                    </div>
                </div>
            </div>
            <div className="uk-comment-body">
                <p>{description}</p>
            </div>
        </article>
    );
}

export default ResultCard;