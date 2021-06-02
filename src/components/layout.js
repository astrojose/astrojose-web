import React from "react"
import { Link } from "gatsby"
import NavLink from './NavLink'
import NavBar from './navbar'
import { rhythm, scale } from "../utils/typography"
import "./../style.css" 

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
    <header className='main-wrapper'>
      	<NavBar />
	  </header>
    <main className="main-wrapper">{children}</main>

    <footer className="main-wrapper">	
      <div className="social-links">
        <a href="https://instagram.com/astrojose_" 
        className="footer-link" target="_blank">instagram </a>
        <a href="https://twitter.com/astrojose_" className="footer-link" target="_blank">twitter </a>
        <a href="https://astrojose.substack.com/subscribe" className="footer-link" target="_blank">get newsletter </a> <br/>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()}, <a href="/" >astrojose</a> 
      </div>
    </footer>
    </>
  )
}

export default Layout
