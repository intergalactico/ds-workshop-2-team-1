import React from 'react'
import { storiesOf } from '@storybook/react'

import H1 from '.'

storiesOf('H1', module)
  .add('index', () => (
    <H1 color="#40401">I am header1</H1>
  ))
