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
      <h3 style={{marginTop:10,marginBottom:20}}>about</h3>
      <AboutBlog />

      <h3 style={{marginTop:10,marginBottom:20}}>about me</h3>
      <BioExtended />
      
	  <h3 style={{marginTop:10,marginBottom:20}}>Setup</h3>
	 
	  <p>
		
	  </p>
	  <ul style={{paddingLeft:40}}> 
	  	<li> Editors: Vim (writting Code), VS Code/Sublime (Reading Code) OS: Ubuntu 20.04 LTS</li>
	  </ul>
      
      <h3 style={{marginTop:10,marginBottom:20}}>contact me</h3>
      <Contact />

      <h3 style={{marginTop:10,marginBottom:20}}>newsletter</h3>
	<p>for updates on this blog.. please subscribe <a href="astrojose.substack.com/subscribe" target="_blank">this newsletter.</a> </p>
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
