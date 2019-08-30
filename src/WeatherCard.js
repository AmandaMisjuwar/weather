import React from "react"
import "./WeatherCard.css"

function WeatherCard(props) {
    return (
        <div className="WeatherCard">
            <h1 className="day">{props.day}</h1>
            <img className="weatherIcon" src={props.image} alt="weather icon"></img>
            <div>
                <p className="high">{props.high}&#176; </p>
                <p className="low"> {props.low}&#176;</p>
            </div>

        </div>
    )


}

export default WeatherCard