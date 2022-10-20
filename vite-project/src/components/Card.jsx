import React from "react";

export default function Card() {
    return (
        <div className="card--div">
            <img src="./src/images/katie-zaferes.png"/>
            <div>
                <img src="./src/images/star.png"/>
                <p>5.0</p>
                <p className="gray">(6) |</p>
                <p className="gray"> USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}