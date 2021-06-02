import React from 'react'
import { Link } from "gatsby"

const NavLink = (props) => {
    return <li>
        <h3
            style={{
                fontFamily: `monospace, sans-serif`,
                marginTop: 0,
                fontWeight: 250,
                paddingRight: 30
            }}>
            <Link style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `deepink`,
            }}

                to={props.navto}
            >
                {props.navtitle}
            </Link>
        </h3>
    </li>

}

export default NavLink
