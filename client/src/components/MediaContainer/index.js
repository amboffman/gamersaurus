import React from 'react'
import MediaCarousel from "../MediaCarousel/index";
import ScreenshotsCard from "../ScreenshotsCard/index";

function MediaContainer(props) {
  let screenshots;
  if (props.screenshots) {
    screenshots = props.screenshots.map((g) => {
     return( <ScreenshotsCard
      key={g.id}
      imageId={g.image_id}
    />) 
    });
  }
    return (
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1">
            <h3 class="uk-card-title">Screenshots</h3>
            <MediaCarousel>
            {screenshots}
            </MediaCarousel>
            <h3 class="uk-card-title">Trailer</h3>
        </div>
    )
}

export default MediaContainer;
