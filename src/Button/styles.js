/*
 * All the button components are using the same styled-component. There is only
 * one file with styles (this one) which is imported into all the button components.
 */

import styled, { css } from 'styled-components';
import { isCircular } from 'styled-utils';
import set from '../Colors/colorset';

/*
 * In styled-components, you can define functions that output
 * CSS properties. This functions can be called from inside the
 * element declarations.
 */
const isIcon = ({ isIcon }) => {
  if (!isIcon) return;
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `;
};

/* Default styles for all the buttons */
export const Button = styled.div`
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  height: 2.40em;
  width: ${p => p.width ? p.width : 'auto'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 18px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  background-color: ${p => p.color ? p.color : 'transparent'};
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${p => p.textColor ? p.textColor : set.dark};
  font-size: ${p => p.size ? p.size : '1rem'};
  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  &:hover {
      border-color: ${p => p.hoverColor ? p.hoverColor : 'rgba(255,255,255,0.2)'};
      color: ${p => p.hoverColor ? p.hoverColor : 'rgba(255,255,255,0.2)'};
  }

  & .icon {
    margin: 0 5px 0 0;
    font-size: ${p => p.size ? p.size : '1rem'};
  }
  ${isIcon}
  ${isCircular}
`;

export const ButtonLink = Button.withComponent('a').extend`
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
`;
