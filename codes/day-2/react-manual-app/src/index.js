//bootstrapper file
import { createRoot } from "react-dom/client";
import App from "./App";
import React from 'react'

const container = document.getElementById('container')
const root = createRoot(container)

//const appReactDetailedHTMLElement = App()
//root.render(appReactDetailedHTMLElement)

//or
//const appReactJSXElement = <App />
//root.render(appReactJSXElement)

//or
root.render(<App />)