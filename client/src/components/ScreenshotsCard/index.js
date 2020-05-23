import React from 'react'

function ScreenshotsCard(props) {
   const screenshot = `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${props.imageId}.jpg`
    return (
        <li>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    <img src={screenshot} alt="name"/> 
                </div>
            </div>
        </li>
    )
}

export default ScreenshotsCard;