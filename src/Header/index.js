import React from 'react'
import HeaderLogo from '../HeaderLogo/index.js'
import NavLink from '../NavLink/index.js'

import * as s from './styles.js'



const Header = (props) => {
  return (
    <s.Header>
    	<HeaderLogo imgsrc="../../assets/dsconf-logo-small.png" alttext="DSCONF Logo" style={{float:"left"}} />
    	<nav style={{float:"right"}}>
    		<ul style={{ listStyleType:"none", display:"inline", padding:"none", margin:"none", float:"right" }}>
    			<li style={{ margin:0, pdding:0}}><NavLink href="#home" color="#fff">Home</NavLink></li>
	    	</ul>
	    </nav>
    </s.Header>
  )
}

export default Header
