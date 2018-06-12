import React from 'react'

import * as s from './styles.js'

const NavLink = ({href, ...props}) => {
  return (
    <s.NavLink href={href} {... props}></s.NavLink>
  )
}

export default NavLink
