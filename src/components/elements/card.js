////////////////////////////////////////////////////////////////////////////////
// FILE: card-entry.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-27
// MODIFIED: 2020-02-29
// PURPOSE: react component for card entries
// DEPENDENCIES: react
// STATUS: working
// COMMENTS:
//      The following props are used in this component
//          - id: unique it (useful for rendering cards in an interation)
//          - className: optional class names
//          - isFeature: applies css class if true 
//          - imagePath: a file path to the file
//          - imageAlt: text for the alt description
//          - title: card title
//          - titleIsLink: render card title as link (logical) 
//          - link: link to the card (uses <Link />)
//          - linkLabel: a string for link 
//          - abstract: summary of the card
//          - date: date the card was released
//          - keywords: an array of keywords
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import PropTypes from "prop-types"

// render card component
function card(props) {

    // process css
    const css_init = props.className ? `card ${props.className}` : `card`
    const css_type = props.isFeature ? `${css_init} card-feature` : `${css_init} card-plain`;

    // return component
    return (
        <section id={props.id ? props.id : null} className={css_type} key={props.id ? props.id : null}>
            {
                // should an image by rendered
                props.img
                    ? (
                        <div className="card-image" style={{ backgroundImage: `url(${props.img})`, height: `${props.imgHeight ? props.imgHeight : "250px"}` }} />
                    )
                    : null
            }
            {
                // should a link be rendered
                props.titleIsLink
                    ? <h3 className="card-title-link">
                        <a href={props.link}>{props.title}</a>
                    </h3>
                    : <h3 className="card-title">{props.title}</h3>
            }
            {
                props.date
                ? <time className="card-date">{props.date}</time>
                : null
            }
            {
                props.abstract
                ? <p className="card-desc">{props.abstract}</p>
                : null
            }
            {
                props.keywords
                    ? (
                        <ul className="card-meta-tags">
                            {
                                props.keywords.map((tag, i) => (
                                    <li key={i} data-lang={tag}>
                                        <code className={`tag tag-${tag}`}>{tag}</code>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                    : null
            }
            {
                // some logic to determine if the input link is internal or external
                props.link
                    ? <a href={props.link} className="card-link">{props.linkLabel}</a>
                    : null
            }
        </section>
    )
}

// PROPS
card.propTypes = {
    className: PropTypes.string,
    isFeature: PropTypes.bool,
    titleIsLink: PropTypes.bool,
    img: PropTypes.string,
    imgHeight: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string,
    keywords: PropTypes.array
}

// EXPORT 
export default card