import React from 'react'
import { storiesOf } from '@storybook/react'

import H1Underline from '.'

storiesOf('H1Underline', module)
  .add('index', () => (
    <H1Underline color="red">I am header1 with underline</H1Underline>
  ))
