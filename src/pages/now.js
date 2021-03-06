import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Now =  ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="now" />
      <div className='content-wrapper'>
        <h3 style={{marginTop:10,marginBottom:20}}>What I&rsquo;m Doing Now</h3>
      
        <p>
        I am currently working on projects that heavily use React.js and Express/Laravel. Here some of things am actively doing/learning
        </p>
        <ul style={{paddingLeft:40}}> 
        <li > <h4>Chaptyp</h4> </li>
          <p> Touch typing test based in Swahili texts. It include quick touch typing guides </p>
          <p> Check it out here <a href="https://chaptyp.web.app" target="_blank">here </a> </p>
        </ul>
      </div>
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
