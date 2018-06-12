import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroIntro from '.'

storiesOf('HeroIntro', module)
  .add('index', () => (
    <HeroIntro color="green">March 14th - 15th, 2018
    in helsinki, finland</HeroIntro>
  ))
