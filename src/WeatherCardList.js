import React from "react"
import forecastData from "./forecast-1.js"
import WeatherCard from "./WeatherCard"
import "./WeatherCardList.css"


class WeatherCardList extends React.Component {
    constructor() {
        super()
        this.state = {
            forecast: forecastData
        }
    }
    render() {
        let cardComponents = this.state.forecast.map((item) => {
            return (
                <WeatherCard
                    key={item.id}
                    day={item.day}
                    image={item.image}
                    high={item.high}
                    low={item.low} />
            )
        })
        return (
            <div className="WeatherCardList">
                {cardComponents}
            </div>
        )
    } 
}

export default WeatherCardList