import React, { useState, useEffect } from 'react'
import API from "../../utils/API";
// import "./style.css"


function SimilarResults(props) {
    const [similarGame, setSimilarGame] = useState({});
    useEffect(() => {
        console.log("HI", props.similar_games)
        if(props.similar_games){
        API.fetchSimilarGames(props.similar_games.join(","))
            .then((sg) => {
                    console.log("SG", sg.data)
                    setSimilarGame(sg.data.map(game => ({
                    id: game.id,
                    name: game.name,
                    rating: game.aggregated_rating,
                    cover: game.cover.image_id,
                })))
            })
        }
}, [props.similar_games]);

    return (
        <div uk-slider="center: true">
            <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabindex="-1"
            >
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid">
                    {props.children}
                </ul>
            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
    )
}

export default SimilarResults;