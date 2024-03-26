import React from 'react'
import './App.css'

const App = () => {
    const welcomeMessage = 'Welcome to React JS'
    const author = 'Created By: Joydip'
    return (
        <div>
            <h2 id="headerElement" style={{ backgroundColor: 'lime' }} className="mystyle">
                <span>{welcomeMessage}</span>
                <br />
                <span>{author}</span>
            </h2>
            <p>
                This is a paragraph
            </p>
        </div >
    )
}

export default App