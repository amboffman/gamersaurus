import React from 'react'
import "./style.css"

function Carousel(props) {
    return (
        <div uk-slider="center: true">

            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                    {props.children}
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
    )
}

export default Carousel;