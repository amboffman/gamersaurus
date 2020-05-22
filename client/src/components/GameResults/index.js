import React from 'react'
//import "./style.css"

function SearchResults(props) {
    return (
        <div className="uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
            <div>
                <div className="uk-card uk-card-default uk-card-body uk-flex-center uk-child-width-1-6">{props.children}</div>
            </div>
        </div>
    )
}

export default SearchResults;

//"uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"