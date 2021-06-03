import React from 'react'
import { rhythm } from "../../utils/typography"

const Contact = () => {

	return (
		<div
		style={{
	        display: `flex`,
	        marginBottom: rhythm(1.0),
	        borderRadius: 10,      
      	}}
		>
		<p>
			For anything contact me at <a href="mailto:jose@astrojose.xyz">jose@astrojose.xyz</a>
		</p>
	
		</div>
	)
}

export default Contact