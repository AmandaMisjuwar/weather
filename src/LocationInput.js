import React from 'react'
import './LocationInput.css'


class LocationInput extends React.Component {
    constructor(){
        super()
        this.state = {
            location: ""
        }
    }
    render() {
        return (
            <div className="locationInput">
                <input type="text" name="location" placeholder="Enter location"></input>
            </div>
        )
    }
}

export default LocationInput;
