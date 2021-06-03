import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

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

	return (
        <div class="navbar content-wrapper shadow">
          <div class="logo">
            <Link to="/" >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author.name}
              id='profile-img'
            />
          </Link>
          </div>
          <div className="hamburger-conteiner m-10">
            <div className='humburger'></div>
            <div className='humburger'></div>
            <div className='humburger'></div>
          </div>
          <div class="menu ">
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
