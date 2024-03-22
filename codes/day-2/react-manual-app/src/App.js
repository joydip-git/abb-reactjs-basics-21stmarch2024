import { createElement } from "react";

//returns DetailedReactHTMLElement object
function App() {
    //data
    const welcomeMessage = 'Welcome to React JS'
    const createdByMessage = 'Created By: Joydip'

    //style
    const headerElementStyle = {
        backgroundColor: 'lime'
    }

    //design
    const welcomeSpanElement = createElement('span', {}, welcomeMessage)
    const brElement = createElement('br', {})
    const authorSpanElement = createElement('span', {}, createdByMessage)
    const headerElement = createElement(
        'h2',
        {
            id: 'headerElement',
            style: { headerElementStyle }
        },
        [welcomeSpanElement, brElement, authorSpanElement]
    )

    return headerElement
}