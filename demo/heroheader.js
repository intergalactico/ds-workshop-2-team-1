/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon, Section, SectionHeader, SectionText, Header, H1, HeroIntro, Button } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const HeroHeader = () => {
  return (
    <div style={{ height:"100vh", background:"url('../assets/dsconf-wide.jpg') blue"}}>
      <Header />
      <img src="../assets/dsconf-logo.png" style={{width:"15em", margin:"0 auto 0 auto", display:"block"}}/>
      <H1 style={{textAlign:"center"}} color="#fff">A DESIGN SYSTEMS CONFERENCE</H1>
      <HeroIntro style={{textAlign:"center"}} color="#fff">MARCH 14th – 15th, 2018<br />IN HELSINKI, FINLAND</HeroIntro>
      <Button style={{margin:"0 auto", display:"block", width:"15em", textAlign:"center", marginTop:"1em"}} color="#fff" textColor="#fff">EVENT OVERVIEW</Button>
    </div>
  )
}

export default HeroHeader
