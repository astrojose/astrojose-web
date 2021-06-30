
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 200, height: 200){
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
    <div class="bio-card content-wrapper">
      <div class="image">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
        />
      </div>
      <div class="bio">
        
          <h2> Hi, I&rsquo;m <Link to='/about'>  
            <strong>Joseph</strong></Link> </h2>
            <p>{author.summary}</p>
          {` `}
        <p>
          See <a href="/about">about me </a>  
      and what I&rsquo;m <a href="/now">doing now </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
