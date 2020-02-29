////////////////////////////////////////////////////////////////////////////////
// FILE: section.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-26
// MODIFIED: 2020-02-27
// PURPOSE: react component for sections
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: n
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
function Section(props) {
    const base = props.isFullWidth ? `full-section` : `main-section`;
    const css = props.className ? `${base} ${props.className}` : base;
    return (
        <section id={props.id ? props.id : null} className={css}>
            {
                props.isFullWidth
                ? (
                    <div className="full-section-content">
                        { props.children }
                    </div>
                )
                : props.children
            }
        </section>
    )
}
export default Section