import React from 'react'
import MediaCarousel from "../MediaCarousel/index";
import ScreenshotsCard from "../ScreenshotsCard/index";

function MediaContainer() {
    return (
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1">
            <h3 class="uk-card-title">Screenshots</h3>
            <MediaCarousel>
            <ScreenshotsCard/>
            </MediaCarousel>
            <h3 class="uk-card-title">Trailer</h3>
        </div>
    )
}

export default MediaContainer;
