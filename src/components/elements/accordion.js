////////////////////////////////////////////////////////////////////////////////
// FILE: accordion.js
// AUTHOR: David Ruvolo
// CREATED: 2020-06-11
// MODIFIED: 2020-06-11
// PURPOSE: accordion component
// DEPENDENCIES: react
// STATUS: complete
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React, { useState} from "react"
function Accordion(props) {
    const [open, setOpen] = useState(false);
    return(
        <>
            <h3 className="accordion-title">
                <button className="accordion-button" onClick={() => setOpen(!open)} aria-expanded={open}>
                    { props.title }
                    <svg className={`accordion-button-icon state-${open ? "open" : "closed"}`} width="25" height="25" viewBox="0 0 25 25">
                        <line stroke="currentColor" stroke-linecap = "round" stroke-width = "2.5" x1 = "12.5" y1 = "5" x2 = "12.5" y2 = "20" />
                        <line stroke="currentColor" stroke-linecap = "round" stroke-width = "2.5" x1 = "5" y1 = "12.5" x2 = "20" y2 = "12.5" />
                    </svg>
                </button>
            </h3>
            <section aria-labelledby="" className={`accordion-content ${!open ? "visually-hidden" : ''}`} aria-hidden={open}>
                {props.children}
            </section>
        </>
    )
}
export default Accordion
