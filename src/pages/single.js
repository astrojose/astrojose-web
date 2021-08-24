import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "./layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
	const author = data.site.siteMetadata.author
	const social = data.site.siteMetadata.social

  return (
    <Layout location={location} avatar={data.avatar} title={siteTitle} author={author} social={social}>
       <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article class="blog-post px-3 py-5 p-md-5">
		    <div class="container">
			    <header class="blog-post-header">
				    <h2 class="title mb-2">{post.frontmatter.title}</h2>
				    <div class="meta mb-3"><span class="date">{post.frontmatter.date}</span><span class="time">{post.timeToRead} min read</span></div>
			    </header>
			    
			    <div class="blog-post-body" dangerouslySetInnerHTML={{ __html: post.html }}/>
				    
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link rounded-left" href={previous.fields.slug}>Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded-right" href={next.fields.slug}>Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
				<div class="blog-comments-section">
					<div id="disqus_thread"></div>
					
				</div>
				
		    </div>
	    </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
		avatar: file(absolutePath: { regex: "/astro-icon.png/" }) {
      childImageSharp {
        fixed(width: 180, height: 180){
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
				author{
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
    markdownRemark( fields: { slug: { eq: $slug }},
    ) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
