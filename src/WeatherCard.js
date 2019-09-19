import React from "react"
import "./WeatherCard.css"

function WeatherCard(props) {
    return (
        <div className="WeatherCard">
            <div className="cardHeader">
                <p className="header">{props.day}/16 september 2019</p>
            </div>
            <div className="cardContent">
                <img className="weatherIcon" src={props.image} alt="weather icon"></img>
                <div className="cardInfo">
                    <h1 className="temp">{props.high}&#176;</h1>
                    <p>Feels like 18&#176;</p>
                    <p>Sunny with slight breeze</p>
                </div>
            </div>



        </div>
    )


}

export default WeatherCard