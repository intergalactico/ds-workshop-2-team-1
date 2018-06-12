import styled, { css } from 'styled-components'
import set from '../Colors/colorset';

export const NavLink = styled.a`
  font-height: 0.7em;
  font-family: open-sans;
  weight: 700;
  color: ${p => p.color};
  text-decoration: none;
  &:hover {
  	color: ${set.caribbeanGreen};
  }
  &:active {
  	color: ${set.caribbeanGreen};
  }
`
