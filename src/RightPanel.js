import React from 'react'
import './RightPanel.css'
import LocationInput from './LocationInput.js'

function RightPanel() {
    return (
        <div className="rightPanel">
            <div className="rightContent">
            <h2>"Sunshine is delicious,
                rain is refreshing,
                <br></br>
                wind braces us up,
                snow is exhilarating;
                <br></br>
                there is really no such thing as bad weather,
                <br></br>
                only different kinds of good weather."
            </h2>
            <p className="author">— John Ruskin</p>
            <LocationInput />
            </div>
            
            
        </div>
    )


}

export default RightPanel