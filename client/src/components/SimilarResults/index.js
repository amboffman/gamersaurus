import React, { useState, useEffect } from 'react'
import API from "../../utils/API";
import GameCard from "../GameCard";
import { Link } from "react-router-dom";


function SimilarResults(props) {
    const [similarGames, setSimilarGames] = useState([]);
    useEffect(() => {
        if(props.similar_games){
        API.fetchSimilarGames(props.similar_games.join(","))
            .then((sg) => {
                    setSimilarGames(sg.data.map(game => ({
                    id: game.id,
                    name: game.name,
                    rating: game.aggregated_rating,
                    cover: game.cover.image_id,
                })))
            })
        }
}, [props.similar_games]);

let similar;
if(similarGames){
       similar =  similarGames.map((game)=>{
           return(
               <GameCard key={game.id} id={game.id}  name={game.name}
               rating={game.aggregated_rating}
               cover={game.cover}/>
           )
        })
}
    return (
        <div uk-slider="center: true">
            <div
                className="uk-position-relative uk-visible-toggle uk-light"
                tabindex="-1"
            >
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid">
                    {similar}
                </ul>
            </div>

            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
    )
}

export default SimilarResults;