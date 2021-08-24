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
			    <h2 class="title mb-3">About </h2>
        <AboutBlog />

        <h2 class="title mb-3">About Me</h2>
        <BioExtended />
        
      <h2 class="title mb-3">Setup</h2>
    
      <ul> 
        <li> Editors: Vim & VS Code</li>
        <li> OS: Ubuntu 20.10 </li>
      </ul>
        
        <h2 class="title mb-3">Contact Me</h2>
        <Contact />

        <h2 class="title mb-3">Newsletter</h2>
    <p>To have frequent updates about what I write.. please subscribe to this <a href="astrojose.substack.com/subscribe" target="_blank"> newsletter.</a> </p> 

		    </div>
	    </article>
	    
	    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center">
			    <h2 class="heading">Newsletter</h2>
			    <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
			    <form class="signup-form form-inline justify-content-center pt-3">
                    <div class="form-group">
                        <label class="sr-only" for="semail">Your email</label>
                        <input 
                          type="email" 
                          id="semail" 
                          name="semail1" 
                          class="form-control mr-md-1 semail" 
                          placeholder="Enter email"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
		    </div>
	    </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
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
          twitter
        } 
      }
    }
  }
`