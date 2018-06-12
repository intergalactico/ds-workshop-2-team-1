import React from 'react'
import { storiesOf } from '@storybook/react'

import Paragraph from '.'

storiesOf('Paragraph', module)
  .add('index', () => (
    <Paragraph color="red">I am some text for my awesome paragraph</Paragraph>
  ))
