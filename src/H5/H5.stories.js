import React from 'react'
import { storiesOf } from '@storybook/react'

import H5 from '.'

storiesOf('H5', module)
  .add('index', () => (
    <H5 color="red">I am header5</H5>
  ))
