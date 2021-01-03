import React from 'react'

import NavLink from './NavLink'

const NavBar = () =>{
 
	return (
        <div id="menu" style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems:`center`,
          minWidth: 300
          }
        }>
		<ul class="menu-items">
        <NavLink navto="/now" navtitle='now'/>
        <NavLink navto="/about" navtitle='about'/>
        <NavLink navto="/projects" navtitle='projects'/> 
        </ul>
		</div>
	)
}

export default NavBar
