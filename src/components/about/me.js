import React from 'react'
import { Link } from 'gatsby'
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
        My name is Joseph Emmanuel,  I am a self taught software developer. 
        I mostly work on freelance and personal projects. 
        I work on a number of side projects that I share in this blog. 
		<br/>
		<br/>

        At any moment I am either learning or building stuff. I update my current status (projects and technology focus) 
       on <Link to="/now">my now page</Link>
            
        </p>
	</div>
)}

export default BioExtended
