import React from 'react'
//import "./style.css"

function SearchResults(props) {
    return (
        <div className="uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
            <div>
                <div className="uk-card uk-card-default uk-card-body">{props.children}</div>
            </div>
        </div>
    )
}

export default SearchResults;