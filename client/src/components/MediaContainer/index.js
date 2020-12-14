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
            <MediaCarousel>
              {screenshots && screenshots.map((game)=> (
                <ScreenshotsCard key= {game.id} imageId = {game.imageId}/>
              ))}
            </MediaCarousel>

    )
}

export default MediaContainer;
