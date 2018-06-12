import React from 'react'
import { storiesOf } from '@storybook/react'

import ParagraphBold from '.'

storiesOf('ParagraphBold', module)
  .add('index', () => (
    <ParagraphBold color="red">I am some bolded paragraph</ParagraphBold>
  ))
