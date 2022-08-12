import React from "react";

export default function Project(props){
    return(
        <div className="project--card">
            <img src={props.img} alt="screenshot"/>
            <div className="project--details">
                <h2>{props.title}</h2>
                <div className="project--date">
                    <h5 className="project--year">{props.year}</h5>
                    <h5 className="project--type">{props.type}</h5>
                </div>
                <p>
                    {props.describe}
                </p>
            </div>
        </div>
    )
}