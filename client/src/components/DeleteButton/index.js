import React from 'react'

export default function index(props) {
    return (
        <div>
            <button data-id={props.id} onClick={props.onClick}>Remove Favorite</button>
        </div>
    )
}
