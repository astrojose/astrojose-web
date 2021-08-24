import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "./layout"
import BioExtended from "../components/about/me"
import AboutBlog from "../components/about/blog"
import Contact from "../components/about/contact"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const { siteUrl, title, description,author,social } = data.site.siteMetadata

  return (
    <Layout location={location} title={title} avatar={data.avatar} social={social} author={author}>
      <SEO 
        title="Joseph Emmanuel" 
        
      />
      <article class="about-section py-5">
		    <div class="container">
			    <h2 class="title mb-3">What I&rsquo;m Doing Now </h2>
          <p>
        I am currently working on projects that heavily use React.js and Express/Laravel. Here some of things am actively doing/learning
        </p>
        <ul style={{paddingLeft:40}}> 
        <li > <h4>Chaptyp</h4> </li>
          <p> Touch typing test based in Swahili texts. It include quick touch typing guides </p>
          <p> Check it out here <a href="https://chaptyp.web.app" target="_blank">here </a> </p>
        </ul>

        <h2 class="title mb-3">Newsletter</h2>
    <p>To have frequent updates about what I write.. please subscribe to this <a href="https://astrojose.substack.com/subscribe" target="_blank"> newsletter.</a> </p> 

		    </div>
	    </article>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/astro-icon.png/" }) {
      childImageSharp {
        fixed(width: 180, height: 180){
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
        title
        description
        author {
          name
          summary
        }
        social{
          instagram
          github
          twitter
        } 
      }
    }
  }
`
