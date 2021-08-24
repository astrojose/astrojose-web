import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryHeader from "../components/category-header"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO 
        title="Joseph Emmanuel" 
      />
      <div className='hero'>
        <Bio />
      </div>
      <div className='content-wrapper'>
        <CategoryHeader title="Recent Posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <div className="entry"> 
                <div className='post-date'>{node.frontmatter.date}</div>
                <div className='post-entry-title'>
                <header>
                  <h3
                    style={{
                      marginTop:10,marginBottom:10
                    }}
                    class="catalog"
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>

              </div>

              </div>
            </article>
          )
        })}

      </div>
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

