import React from 'react'

import Layout from '../components/layout'
import SearchBox from '../components/searchBox'
import SEO from '../components/seo'
import Operators from '../components/operators'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SearchBox selectedOperator="" />
    <Operators />
  </Layout>
)

export default IndexPage
