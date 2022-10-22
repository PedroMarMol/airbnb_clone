import React from "react";

export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/public/images/${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src="/public/images/star.png" className="card--star"/>
                <p>{props.rating}</p>
                <p className="gray">({props.reviewCount}) |</p>
                <p className="gray">{props.location}</p>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">{props.price}$</span> / person</p>
        </div>
    )
}