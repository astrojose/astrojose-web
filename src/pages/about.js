import React from "react"
import { Link, graphql } from "gatsby"

import BioExtended from "../components/about/me"
import AboutBlog from "../components/about/blog"
import Contact from "../components/about/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Newsletter from "../components/newsletter"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="about" />
      <div className='content-wrapper'>
        <h3 style={{marginTop:10,marginBottom:20}}>About</h3>
        <AboutBlog />

        <h3 style={{marginTop:10,marginBottom:20}}>About Me</h3>
        <BioExtended />
        
      <h3 style={{marginTop:10,marginBottom:20}}>Setup</h3>
    
      <ul> 
        <li> Editors: Vim & VS Code</li>
        <li> OS: Ubuntu 20.10 LTS</li>
      </ul>
        
        <h3 style={{marginTop:10,marginBottom:20}}>Contact Me</h3>
        <Contact />

        <h3 style={{marginTop:10,marginBottom:20}}>Newsletter</h3>
    <p>To have frequent updates about what I write.. please subscribe to this <a href="astrojose.substack.com/subscribe" target="_blank"> newsletter.</a> </p> 

      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
