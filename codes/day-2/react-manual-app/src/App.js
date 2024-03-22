import React from "react";
import './App.css'

const App = () => {
    //data
    const welcomeMessage = 'Welcome to React JS'
    const createdByMessage = 'Created By: Joydip'

    //style
    const headerElementStyle = {
        backgroundColor: 'lime'
    }

    return (
        <div>
            <h2 id="headerElement" style={headerElementStyle} className="my-style">
                <span>{welcomeMessage}</span>
                <br />
                <span>{createdByMessage}</span>
            </h2>
            <p>
                This is a paragraph
            </p>
        </div>
    )
}
export default App

