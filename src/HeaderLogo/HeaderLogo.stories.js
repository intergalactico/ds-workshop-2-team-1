import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderLogo from '.'

storiesOf('HeaderLogo', module)
  .add('index', () => (
    <HeaderLogo imgsrc="../../assets/dsconf-logo-small.png" alttext="DSCONF Logo" />
  ))
