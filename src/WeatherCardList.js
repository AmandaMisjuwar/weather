import React from "react"
import forecastData from "./forecast-1.js"
import WeatherCard from "./WeatherCard"
import "./WeatherCardList.css"

const API_KEY = "2b87a2c6456baccbe094b142f7d8a400"
const city = "Toronto"


class WeatherCardList extends React.Component {
    constructor() {
        super()
        this.state = {
            forecast: forecastData
        }
    }
    // get weather information as JSON object
    /* componentDidMount() {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`
        console.log(url)
        fetch(url)
            .then(response => response.text()) //formats API response into a JSON object
            .then(response => {
                console.log(response)
            })
            .catch(console.log)
    } */

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