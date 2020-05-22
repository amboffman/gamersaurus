import React from 'react'

function MediaCarousel(props) {
    return (
        <div uk-slider>
            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                    {props.children}
                </ul>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
    )
}

export default MediaCarousel;