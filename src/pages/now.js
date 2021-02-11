import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Now =  ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="now" />
      <h3 style={{marginTop:10,marginBottom:20}}>What I&rsquo;m Doing Now</h3>
	  
	  <p>
		I am currently working on projects that heavily use React.js and Express/Laravel. Here some of things am actively doing/learning
	  </p>
	  <ul style={{paddingLeft:40}}> 
		<li > Javascript Patterns especially with React.js </li>
		<li> RESTul APIs with Express and Laravel </li>
	  	<li> Redesigning this blog(astrojose.com) </li>
	  </ul>
      
    </Layout>
  )
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  } `
