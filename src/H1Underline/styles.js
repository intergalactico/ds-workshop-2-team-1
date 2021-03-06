import styled, { css } from 'styled-components'

export const H1Underline = styled.h1`
  &:after {
  	content: ""; /* This is necessary for the pseudo element to work. */ 
	display: block; /* This will put the pseudo element on its own line. */
	width: 15%; /* Change this to whatever width you want. */
	padding-top: 0.1em; /* This creates some space between the element and the border. */
	border-bottom: 0.1em solid ${p => p.color};
  }
  color: ${p => p.color};
  font-family: futura-pt-bold, sans-serif, arial;
  font-style: normal;
  font-weight: 700;
  font-size: 2.6em;
  line-height: 1em;
  text-transform: uppercase;
`
