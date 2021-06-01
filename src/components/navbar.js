import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"

import NavLink from './NavLink'

const NavBar = () =>{
  const data = useStaticQuery(graphql`
  query NavQuery {
    avatar: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
          instagram
        }
        siteUrl
      }	
    }
  }
`)

const { author, social, siteUrl } = data.site.siteMetadata
const logoStyle = {
  height:`70px`
}
	return (
        <div class="navbar">
          <div class="logo"><a href="/" >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
            />
          </a>
          </div>
          <div class="menu">
            <ul class="menu-items">
              <NavLink navto="/now" navtitle='now'/>
              <NavLink navto="/blog" navtitle='blog'/> 
              <NavLink navto="/about" navtitle='about'/>
            </ul>
          </div>
      </div>
	)
}

export default NavBar
