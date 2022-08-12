import React from "react";

export default function Works(props){
    return(
        <div className="works--card">
            <h2>{props.heading}</h2>
            <div className="works--date">
                <h3>{props.date}</h3>
                <p>|</p>
                <h3>{props.site}</h3>
            </div>

            <p>
                {props.describe}
            </p>
            
        </div>
    )
}