import React from 'react'
import { rhythm } from "../../utils/typography"
import { useStaticQuery, graphql } from "gatsby"

const BioExtended = () => {
	/* const data = useStaticQuery(graphql`
    query BioQuery {
	      site {
	        siteMetadata {
	          author {
	            name
	            summary
	          }
	          social {
	            twitter
	            instagram
	          }
	          siteUrl
	        }	
	      }
	    }
	  `)
  	const { siteUrl } = data.site.siteMetadata
*/
	return (
	<div
		style={{
	        display: `flex`,
	        marginBottom: rhythm(1.0),
	        borderRadius: 10,      
      	}}
		>
		<p>
        Namely,Joseph Emmanuel, a software developer, mostly self-taught. 
        I code on freelance projects as I currently do not have a full time job. 
        I work on a number of side projects that I share in this blog.  <br/>
        <em>What am working on now?</em> see <a href={`astrojose.com/now`}>my now page</a>
            
        </p>
	</div>
)}

export default BioExtended
