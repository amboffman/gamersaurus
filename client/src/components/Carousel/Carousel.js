import React from 'react'

function Carousel() {
    return (
        <div uk-slider="center: true">

            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

                <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png" alt="placeholder"></img>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Game Title</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png" alt="placeholder"></img>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Game Title</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png" alt="placeholder"></img>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Game Title</h3>
                            </div>
                        </div>
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

        </div>
    )
}

export default Carousel;