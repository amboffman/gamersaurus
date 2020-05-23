import React from 'react'
import MediaCarousel from "../MediaCarousel/index";
import ScreenshotsCard from "../ScreenshotsCard/index";

function MediaContainer(props) {
  let screenshots;
  if (props.screenshots) {
    console.log("props", props.screenshots);
    screenshots = props.screenshots.map((g) => {
     return( {
       id: g.id,
       imageId: g.image_id
     }) 
    });
  }
  console.log("screenshots:", screenshots);

    return (
        // <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
        <div>
            <h3 >Screenshots</h3>
            <MediaCarousel>
              {screenshots && screenshots.map((game)=> (
                <ScreenshotsCard key= {game.id} imageId = {game.imageId}/>
              ))}
            </MediaCarousel>
            <h3 >Trailer</h3>
        </div>
    )
}

export default MediaContainer;
