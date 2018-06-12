import React from 'react'
import { storiesOf } from '@storybook/react'

import H4 from '.'

storiesOf('H4', module)
  .add('index', () => (
    <H4 color="red">I am header4</H4>
  ))
