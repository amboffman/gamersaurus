import React from 'react'
import Carousel from "../Carousel/index";
import ScreenshotsCard from "../ScreenshotsCard/index";

function MediaContainer() {
    return (
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 class="uk-card-title">Screenshots</h3>
            <Carousel>
            <ScreenshotsCard/>
            </Carousel>
            <h3 class="uk-card-title">Trailer</h3>
        </div>
    )
}

export default MediaContainer;