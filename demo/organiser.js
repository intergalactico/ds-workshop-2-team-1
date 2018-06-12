/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon, Section, SectionHeader, SectionText, H3 } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Organiser = () => {
  return (
    <div style={{ height:"100vh", background:"#0e1116"}}>
      <H3 style={{textAlign:"center", paddingTop:"2em"}}color="#fff">Main organizer</H3>
      <img style={{display:"block", margin:"0 auto", width:"15em"}} src="../assets/eficode-light.png" alt="Eficode Oy" />
      <H3 style={{textAlign:"center", paddingTop:"2em"}}color="#fff">Partners</H3>
      <img style={{display:"block", margin:"0 auto", width:"15em"}} src="../assets/nitor-dark.jpg" alt="Nitor Oy" />

    </div>
  )
}

export default Organiser
