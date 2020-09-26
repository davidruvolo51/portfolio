////////////////////////////////////////////////////////////////////////////////
// FILE: index.js
// AUTHOR: David Ruvolo
// CREATED: 2020-09-22
// MODIFIED: 2020-09-22
// PURPOSE: root react file
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import "./components/styles/index.scss"


// render App
ReactDOM.render(<App />, document.getElementById("app"));