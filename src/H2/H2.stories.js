import React from 'react'
import { storiesOf } from '@storybook/react'

import H2 from '.'

storiesOf('H2', module)
  .add('index', () => (
    <H2 color="red">H2</H2>
  ))
