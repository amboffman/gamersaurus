import React from 'react'
import "./style.css"

function GameResults(props) {
    return (
        <div uk-slider="center: true">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
        >
          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid">
            {props.children}
          </ul>
        </div>
  
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
      </div>
    )
}

export default GameResults;

//"uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"