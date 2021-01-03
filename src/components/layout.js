import React from "react"
import { Link } from "gatsby"
import NavLink from './NavLink'
import NavBar from './navbar'
import { rhythm, scale } from "../utils/typography"
import "./style.css" 

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
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
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
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
		height: `100%`,
      }}
    >
      <header style={{
        display: `flex`,
        justifyContent: `space-between`,
        
      }
      }>
        <div style={{
       
        }}> { header } </div>
      	<NavBar />
	  </header>

      <main>{children}</main>
      <footer class="main">
	    <a href="https://github.com/astrojose">github </a>
	  	<a href="mailto:jossey1918@gmail.com" >email </a>
	  	<a href="https://instagram.com" >instagram </a> <br/>
        © {new Date().getFullYear()}, <a href="astrojose.com">astrojose</a> 
      </footer>
    </div>
  )
}

export default Layout
