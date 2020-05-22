import React from 'react'

function ScreenshotsCard() {
   const screenshot = "https://images.igdb.com/igdb/image/upload/t_screenshot_big/sc88sv.jpg" 
    return (
        <li>
            <div className="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img src={screenshot} alt="name"/> 
                </div>
            </div>
        </li>
    )
}

export default ScreenshotsCard;