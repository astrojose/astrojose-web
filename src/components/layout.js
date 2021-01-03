import React from "react"
import { Link } from "gatsby"
import NavLink from './NavLink'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header, newsletter

  if (location.pathname === rootPath) {
    header = (
      <h2
        style={{
          ...scale(1.0),
          marginBottom: rhythm(1.0),
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
      </h2>
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
      }}
    >
      <header style={{
        display: `flex`,
        justifyContent: `space-between`,
        
      }
      }>
        <div style={{
       
        }}> { header } </div>
        <div style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems:`center`,
          minWidth: 300
          }
        }> 
        <NavLink navto="/now" navtitle='now'/>
        <NavLink navto="/about" navtitle='about'/>
        <NavLink navto="/projects" navtitle='projects'/> 
        </div>
      </header>

      <main>{children}</main>
      <footer style={{ width: 300, margin: `auto`}}>
        © {new Date().getFullYear()}, <a href="">astrojose</a> 
        {` `}
      </footer>
    </div>
  )
}

export default Layout
