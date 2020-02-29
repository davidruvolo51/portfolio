////////////////////////////////////////////////////////////////////////////////
// FILE: footer.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-25
// MODIFIED: 2020-02-29
// PURPOSE: footer component
// DEPENDENCIES: react, footer.scss, nav, twitter icon, github icon
// STATUS: working 
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React from "react"
import Twitter from "../images/twitter"
import Github from "../images/github"
function Footer(){
  return (
    <footer className="footer">
      <h2>@dcruvolo</h2>
      <ul className="menu footer-menu">
        <li className="menu-item">
          <a className="menu-link" href="https://www.twitter.com/dcruvolo">
            <Twitter className="menu-link-icon icon" />
            @dcruvolo
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="https://github.com/davidruvolo51">
            <Github className="menu-link-icon icon" />
            @davidruvolo51
          </a>
        </li>
      </ul>
    </footer>
  )
}
export default Footer
