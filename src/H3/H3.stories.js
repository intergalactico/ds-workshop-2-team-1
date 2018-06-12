import React from 'react'
import { storiesOf } from '@storybook/react'

import H3 from '.'

storiesOf('H3', module)
  .add('index', () => (
    <H3 color="red">I am header3</H3>
  ))
