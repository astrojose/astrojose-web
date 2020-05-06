import React from 'react'
import { Link } from "gatsby"

const NavLink = (props) => {
    return <div style={{
                
             }}>
            <h3
                style={{
                fontFamily: `Montserrat, sans-serif`,
                marginTop: 0,
                fontWeight: 600
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
        </div>
        
} 

export default NavLink