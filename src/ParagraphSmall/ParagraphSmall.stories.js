import React from 'react'
import { storiesOf } from '@storybook/react'

import ParagraphSmall from '.'

storiesOf('ParagraphSmall', module)
  .add('index', () => (
    <ParagraphSmall color="green">I am small paragraph.</ParagraphSmall>
  ))
