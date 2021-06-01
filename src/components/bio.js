
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.png/" }) {
        childImageSharp {
          fixed(width: 125, height: 125){
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
    <div class="bio-card">
      <div class="image">
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
      </div>
      <div class="bio">
        <p>
          Hi, I&rsquo;m <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
            <strong>Joseph</strong>
          </a> {author.summary} <br/>
          {` `}
          More? see <a href="/about">about page.. </a> 
      or what I&rsquo;m <a href="/now">doing now </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
