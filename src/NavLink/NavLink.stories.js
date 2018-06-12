import React from 'react'
import { storiesOf } from '@storybook/react'

import NavLink from '.'

storiesOf('NavLink', module)
  .add('index', () => (
    <NavLink href="#home" color="#000">I am a link</NavLink>
  ))
