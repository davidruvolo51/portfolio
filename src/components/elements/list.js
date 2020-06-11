////////////////////////////////////////////////////////////////////////////////
// FILE: list.js
// AUTHOR: David Ruvolo
// CREATED: 2020-06-11
// MODIFIED: 2020-06-11
// PURPOSE: create an expandable list
// DEPENDENCIES: react
// STATUS: in.progress
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react"
function list(props) {
    
    // set input data
    const [df, setData] = useState([])
    useEffect(() => {
        setData(props.data)
    }, [])
    
    // set show/hide limit + var
    const threshold = props.threshold ? props.threshold : 3;
    const [showMore, setShowMore] = useState(true);

    // markup
    return (
        <>
            <ol id={props.id ? props.id : null} className={props.className ? `expandable-list ${props.className}` : "expandable-list"}>
                {
                    df.map((d, index) =>
                        index < threshold 
                        ? <li className="list-item" key={index} dangerouslySetInnerHTML={{__html: d}} />
                        : <li className={showMore ? "list-item visually-hidden" : "list-item"} aria-hidden={showMore} key={index} dangerouslySetInnerHTML={{__html: d}} />
                    )
                }
            </ol>
            {
                df.length > threshold
                ? (
                    <button className="expandable-list-button" onClick={() => setShowMore(!showMore)}>
                        <span>{showMore ? "See All" : "See Less"}</span>
                    </button>
                )
                : null
            }
        </>
    )
}
export default list