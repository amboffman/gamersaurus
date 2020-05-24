import React from 'react';
import "./style.css";

function ScreenshotsCard(props) {
   const screenshot = `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${props.imageId}.jpg`
    return (
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top screenshot">
                    <img src={screenshot} alt="name"/> 
                </div>
            </div>
    )
}

export default ScreenshotsCard;