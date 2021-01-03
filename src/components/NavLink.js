import React from 'react'
import { Link } from "gatsby"

const NavLink = (props) => {
    return <li>           
			<h3
                style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
                fontWeight: 150,
                paddingLeft: 10  
            }}>
			<Link style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
            }}

            to={props.navto}
             >
            {props.navtitle}
            </Link>
			</h3>
        </li>
        
} 

export default NavLink
