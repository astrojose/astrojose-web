
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.0),
        borderRadius: 10,      
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      
      <p>
        Hi, I&rsquo;m <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
          <strong>{author.name}</strong>
        </a> {author.summary} <br/>
        {` `}
        More? see <a href={`${siteUrl}about`}>about page..</a> 

        
      </p>
    </div>
  )
}

export default Bio
