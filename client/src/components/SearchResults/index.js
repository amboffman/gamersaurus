import React from 'react'
import "./style.css"

function SearchResults(props) {
    return (
        <div class="uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
            <div>
                <div class="uk-card uk-card-default uk-card-body">{props.children}</div>
            </div>
        </div>
    )
}

export default SearchResults;