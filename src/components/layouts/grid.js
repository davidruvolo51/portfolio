////////////////////////////////////////////////////////////////////////////////
// FILE: grid.js
// AUTHOR: David Ruvolo
// CREATED: 2019-09-30
// MODIFIED: 2020-02-27
// PURPOSE: react component for flex layouts
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
function GridWrapper(props) {

    // layouts
    const defLayouts = ["50x2", "40x60", "60x40", "70x30", "30x70", "33x3"];

    // process props
    const layout = props.layout ? props.layout : "50x2";
    if (defLayouts.indexOf(layout) === -1) {
        console.error(`Error in 'FlexLayout' component: '${props.layout}' is not an available layout.`)
    }

    // process child elements
    let elements = React.Children.toArray(props.children);
    for (let i = 0; i < elements.length; i++) {
        elements[i] = React.cloneElement(elements[i], {
            className: elements[i].props.className ? `grid-child ${elements[i].props.className}` : `grid-child`
        })
    }
    return (
        <div
            id={props.id ? props.id : null}
            className={`grid grid-${layout}-layout 
                ${props.className ? props.className : "grid-default"}
                `}
            aria-label={props.ariaLabel ? props.ariaLabel : null}>
            {elements}
        </div>
    )
}

// render component
function Grid(props) {
    return (
        <GridWrapper {...props} >
            {props.children}
        </GridWrapper>
    )
}

export default Grid