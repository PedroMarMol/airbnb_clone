import React from "react";

export default function Card(props) {
    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/public/images/${props.item.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src="/public/images/star.png" className="card--star"/>
                <p>{props.item.stats.rating}</p>
                <p className="gray">({props.item.stats.reviewCount}) |</p>
                <p className="gray">{props.item.location}</p>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">{props.item.price}$</span> / person</p>
        </div>
    )
}