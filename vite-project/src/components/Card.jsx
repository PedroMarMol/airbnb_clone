import React from "react";

export default function Card(props) {
    return (
        <div className="card--div">
            <img src={`/public/images/${props.coverImg}`}/>
            <div>
                <img src="/public/images/star.png"/>
                <p>{props.rating}</p>
                <p className="gray">({props.reviewCount}) |</p>
                <p className="gray">{props.location}</p>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">{props.price}$</span> / person</p>
        </div>
    )
}