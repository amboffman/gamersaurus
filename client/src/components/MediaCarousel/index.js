import React from 'react'

function MediaCarousel(props) {
    return (
        // <div uk-slider>
        //     <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        //         <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        //             {props.children}
        //         </ul>
        //     </div>
        //     <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        // </div>
        <div className=" uk-slidenav-position" data-uk-slideshow>
            <ul className="uikit-slider uk-slideshow">
            {props.children}
            </ul>
            <a href="" className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
            <a href="" className="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
            <ul className="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center">
                <li data-uk-slideshow-item="0"><a href=""></a></li>
                <li data-uk-slideshow-item="1"><a href=""></a></li>
            </ul>
        </div>
    )
}

export default MediaCarousel;