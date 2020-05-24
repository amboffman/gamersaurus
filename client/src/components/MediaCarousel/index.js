import React from 'react'

function MediaCarousel(props) {
    return (
        <div className="uk-slidenav-position" data-uk-slideshow>
            <ul className="uk-slideshow ">
            {props.children}
            </ul>
        </div>
    )
}

export default MediaCarousel;