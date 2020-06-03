import React from 'react'
import MediaCarousel from "../MediaCarousel/index";
import ScreenshotsCard from "../ScreenshotsCard/index";
import "./style.css"
function MediaContainer(props) {
  let screenshots;
  if (props.screenshots) {
    screenshots = props.screenshots.map((g) => {
     return( {
       id: g.id,
       imageId: g.image_id
     }) 
    });
  }

    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-1">
            <h3 >Screenshots</h3>
            <MediaCarousel>
              {screenshots && screenshots.map((game)=> (
                <ScreenshotsCard key= {game.id} imageId = {game.imageId}/>
              ))}
            </MediaCarousel>
        </div>
    )
}

export default MediaContainer;
