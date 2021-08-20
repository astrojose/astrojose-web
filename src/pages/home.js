import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "./layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO 
        title="Joseph Emmanuel" 
      />
      <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center">
			    <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
			    <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
			    <form className="signup-form form-inline justify-content-center pt-3">
                    <div className="form-group">
                        <label className="sr-only" for="semail">Your email</label>
                        <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
		    </div>
	    </section>
	    <section className="blog-list px-3 py-5 p-md-5">
		    <div className="container">
			    <div className="item mb-5">
				    <div className="media">
					    <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image" />
					    <div className="media-body">
						    <h3 className="title mb-1">
                  <a href="blog-post.html">
                    Why Every Developer Should Have A Blog</a>
                    </h3>
						    <div className="meta mb-1">
                  <span className="date">
                    Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
						    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
						    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
					    </div>
				    </div>
			    </div>
			    <div className="item mb-5">
				    <div className="media">
					    <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-2.jpg" alt="image"/>
					    <div className="media-body">
						    <h3 className="title mb-1"><a href="blog-post.html">A Guide to Becoming a Full-Stack Developer</a></h3>
						    <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3 min read</span><span className="comment"><a href="#">26 comments</a></span></div>
						    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
						    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
					    </div>
				    </div>
			    </div>			    
			    <nav className="blog-nav nav nav-justified my-5">
				  <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
		    </div>
	    </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
