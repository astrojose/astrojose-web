
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "./layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const { siteUrl, title, description,author,social } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={title} avatar={data.avatar} social={social} author={author}>
      <SEO 
        title="Joseph Emmanuel" 
      />
      <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center">
			    <h2 className="heading">Welcome !!</h2> <hr/>
			    <div className="intro">
            <p>{description}</p>
            {/* <p>Plese subscribe and get my latest blog post in your inbox.</p> */}
            <p>
          See <Link to="/about">about me </Link>  
      and what I&rsquo;m <Link to="/now">doing now </Link>
        </p>
          
          </div>
			    {/* <form className="signup-form form-inline justify-content-center pt-3">
                    <div className="form-group">
                        <label className="sr-only" for="semail">Your email</label>
                        <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form> */}
		    </div>
	    </section>
	    <section className="blog-list px-3 py-5 p-md-5">
		    <div className="container">
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
                  {node.frontmatter.date}</span><span className="time">{ node.timeToRead } min read</span><span className="comment"></span></div>
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
			    
			    {/* <nav className="blog-nav nav nav-justified my-5">
				  <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav> */}
				
		    </div>
	    </section>
    </Layout>
  )
}

export default BlogIndex

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
          twitter
          github
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
          timeToRead
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
