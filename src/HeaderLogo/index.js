import React from 'react'

import * as s from './styles.js'

const HeaderLogo = ({ imgsrc, alttext, ...props}) => {
  return (
    <s.HeaderLogo src={imgsrc} alt={alttext}></s.HeaderLogo>
  )
}

export default HeaderLogo
