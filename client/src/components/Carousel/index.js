import React from 'react'
import "./style.css"

function Carousel(props) {
    return (
        <div uk-slider="center: true">

            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-6@m uk-grid">
                    {props.children}
                </ul>

            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
    )
}

export default Carousel;