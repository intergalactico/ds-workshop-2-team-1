/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon, Section, SectionHeader, SectionText, H3, ParagraphBold } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Footer = () => {
  return (
    <div style={{ height:"55vh", background:"#494949", paddingLeft:"5em", paddingTop: "5em	"}}>
     <H3 color="#fff">Stay up to date</H3>
     <ParagraphBold color="#fff">We will use the information you provided to share with you the information on when the tickets launch, and critical updates about the event.</ParagraphBold>
    </div>
  )
}

export default Footer
