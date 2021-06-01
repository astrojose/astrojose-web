import React from "react"
import { Link } from "gatsby"
import NavLink from './NavLink'
import NavBar from './navbar'
import { rhythm, scale } from "../utils/typography"
import "./../style.css" 

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header, newsletter

  if (location.pathname === rootPath) {
    header = (
      <h3 class="title"
        style={{
          ...scale(1.0),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
    
  } else {
    header = (
     <div class="logo">
       <a>
         <img src=""></img>
       </a>
     </div>
    )
  }
  return (
    <div className="wrapper">
      <header style={{
        display: `flex`,
        justifyContent: `space-between`,
      }
      }>
      	<NavBar />
	  </header>
      <main>{children}</main>
      <footer>	
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
    </div>
  )
}

export default Layout
