////////////////////////////////////////////////////////////////////////////////
// FILE: hero.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-25
// MODIFIED: 2020-02-27
// PURPOSE: react component for page heros
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import PropTypes from "prop-types"
function Hero(props){
    return (
        <header id={props.id ? props.id : null} className={ props.className ? `hero hero-index ${props.className}` : "hero hero-index"} style={props.style ? props.style : null} >
            <div className="hero-content">
                {props.children}
            </div>
        </header>
    )
}

// SET PROPS
Hero.propTypes = {
    className: PropTypes.string
}

// EXPORT
export default Hero