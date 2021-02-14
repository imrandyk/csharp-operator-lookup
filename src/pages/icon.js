import React from 'react'

import Layout from '../components/layout'
import SearchBox from '../components/searchBox'
import SEO from '../components/seo'
import Operators from '../components/operators'
import Icon from '../components/icon'
import Logo from '../components/logo'

const IndexPage = () => (
<div class="canvas__container bg-black text-primary-500 min-h-screen">
  <canvas id="cnvs" class="canvas__canvas text-primary-500">
      <Logo size={32*2*2*2} />
  </canvas>
  <img src="" id="mirror" class="canvas__mirror" />
  <Logo size={32*2*2*2} />
</div>
)

export default IndexPage
