import React from 'react'
import "./style.css"

export default function index(props) {
    return (
        <div>
            <button className="deleteButton" data-id={props.id} onClick={props.onClick}>Remove Favorite</button>
        </div>
    )
}
