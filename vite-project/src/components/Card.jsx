import React from "react";

export default function Card(props) {
    return (
        <div className="card--div">
            <img src={`/src/images/${props.img}`}/>
            <div>
                <img src="/src/images/star.png"/>
                <p>{props.rating}</p>
                <p className="gray">({props.reviewCount}) |</p>
                <p className="gray">{props.country}</p>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">{props.price}$</span> / person</p>
        </div>
    )
}