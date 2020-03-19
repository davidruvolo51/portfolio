////////////////////////////////////////////////////////////////////////////////
// FILE: header.js
// AUTHOR: David Ruvolo
// CREATED: 2019-10-25
// MODIFIED: 2020-02-29
// PURPOSE: react component for page header, i.e., navbar
// DEPENDENCIES: react, link, home icon
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { useState, useEffect } from "react"
function Header() {

	// set states
	const [isOpen, setMenu] = useState(false);

	
	// handle window resize for mobile nav
	const winSize = useWindowSize();
	useEffect(() => {
		if (typeof winSize !== "undefined") {
			const breakpoint = 972;
			if (winSize.width >= breakpoint) {
				setMenu(false)
			}
		}
	})
	
	// function to handle link clicks and menu toggle
	function closeMenu() {
		return isOpen ? setMenu(false) : null;
	}

	// render
	return (
		<nav className="nav" role="navigation">
			<a to="/" className="nav-item brand-link">
				@dcruvolo
      			</a>
			<ul className={`menu nav-item navigation ${isOpen ? "expanded" : ''}`} aria-hidden={isOpen ? null : "true"}>
				<li className="menu-item">
					<a className="menu-link" href="#welcome" onClick={() => closeMenu()}>Welcome</a>
				</li>
				<li className="menu-item">
					<a className="menu-link" href="#projects" onClick={() => closeMenu()}>Projects</a>
				</li>
				<li className="menu-item">
					<a className="menu-link" href="#blog" onClick={() => closeMenu()}>Blog</a>
				</li>
			</ul>
			<ul className="nav-item menu menu-btns" aria-label="site settings">
				<li className="menu-item menu-button">
					<button id="menuBtn" aria-label="open and close menu" className={isOpen ? "open" : ''} aria-expanded={isOpen ? "true" : "false"} onClick={() => setMenu(!isOpen)}>
						<span className="menu-icon" aria-hidden="true">
							<span className="menu-bar"></span>
							<span className="menu-bar"></span>
							<span className="menu-bar"></span>
						</span>
					</button>
				</li>
			</ul>
		</nav>
	)
}
export default Header


// handle window resize from https://usehooks.com/useWindowSize/
function useWindowSize() {
	const isClient = typeof window === 'object';
  
	function getSize() {
	  return {
		width: isClient ? window.innerWidth : undefined,
		height: isClient ? window.innerHeight : undefined
	  };
	}
  
	const [windowSize, setWindowSize] = useState(getSize);
  
	useEffect(() => {
	  if (!isClient) {
		return false;
	  }
	  
	  function handleResize() {
		setWindowSize(getSize());
	  }
  
	  window.addEventListener('resize', handleResize);
	  return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount
  
	return windowSize;
  }