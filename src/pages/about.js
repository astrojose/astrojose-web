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
	  	<li> Editors: Vim (writting Code), VS Code/Sublime (Reading Code) </li>
		<li> OS: Ubuntu 20.04 LTS </li>
		<li > PC: HP Elitebook 840 G1, 8GB RAM, 128GB SSD, 320GB HDD </li>
	  </ul>
      
      <h3 style={{marginTop:10,marginBottom:20}}>contact me</h3>
      <Contact />

      <h3 style={{marginTop:10,marginBottom:20}}>subscribe to my <a href="astrojose.substack.com/subscribe" target="_blank">newsletter.</a></h3>
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
