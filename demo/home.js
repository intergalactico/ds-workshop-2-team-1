/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Icon, Section, SectionHeader, SectionText, TeamMember, H2, Paragraph } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
        <div>
            <H2>A two-day conference with one day of keynotes & one day of workshops.</H2>
            <Paragraph>
                DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
                An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
                Sounds good? Make sure you familiarize yourself with our code of conduct.
            </Paragraph>
        </div>
        <div>
            <H2>Keynotes, talks and workshops from the fore-front of Design Systems.</H2>
            <Paragraph>
                DSCONF has 4 long, and 6 shorter speeches during the conference day.
                We are aiming to bring abundance of tangible information to attendees with real cases and learnings.
                The second day of DSCONF is dedicated to workshops.
                There is a total number of 5 workshops, and you can purchase them separately. The workshops are either half-day or full-day.
            </Paragraph>
        </div>
        <div>
            <H2>Keynotes</H2>
            <div style={{display:"flex", justifyContent: "space-around",}}>
                <TeamMember
                    name="Donald Duck"
                    title="Director of Everything"
                    social={{
                      twitter: 'donaldducknl',
                      linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
                    }}
                    avatar="../assets/avatar.jpg"
                />
                <TeamMember
                    name="Mikko"
                    title="Designer"
                    social={{
                      twitter: 'donaldducknl',
                      linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
                    }}
                    avatar="../assets/karri_saarinen-1.jpg"
                />
            </div>
        </div>
        <div>
            <H2>Hosts</H2>
            <div style={{display:"flex", justifyContent: "space-around",}}>
                <TeamMember
                    name="Donald Duck"
                    title="Director of Everything"
                    social={{
                      twitter: 'donaldducknl',
                      linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
                    }}
                    avatar="../assets/curtis-square-1-1.jpg"
                />
                <TeamMember
                    name="Mikko"
                    title="Designer"
                    social={{
                      twitter: 'donaldducknl',
                      linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
                    }}
                    avatar="../assets/angelos-branding.jpg"
                />
            </div>
        </div>
    </div>
  )
}

export default Home
