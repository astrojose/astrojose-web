import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "./layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { siteUrl, title, description,author,social } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={title} avatar={data.avatar} social={social} author={author}>
      <SEO 
        title="Joseph Emmanuel" 
        
      />
       <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">
				{posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
			    <div className="item mb-5">
				    <div className="media">
					    {/* <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image" /> */}
					    <div className="media-body">
						    <h3 className="title mb-1">
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                    </h3>
						    <div className="meta mb-1">
                  <span className="date">
                  {node.frontmatter.date}</span><span className="time">5 min read</span><span className="comment"></span></div>
						    <div className="intro"><p
                    dangerouslySetInnerHTML={{
                      __html: node.excerpt,
                    }}
                  /></div>
						    <Link className="more-link" to={node.fields.slug}>Read more &rarr;</Link>
					    </div>
				    </div>
			    </div>
            )
          })}
			  
			    
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
		    </div>
	    </section>
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
    allMarkdownRemark(
      filter: {frontmatter: { published: { eq: true } }},
      sort: { fields: [frontmatter___date], order: DESC }
	limit: 15
	) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD")
            title
            description
            published
          }
        }
      }
    }
  }
`
