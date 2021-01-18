import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SearchBox from '../components/searchBox'
import SEO from '../components/seo'
import DocAndPlay from '../components/docAndPlay.js'

const OperatorTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { frontmatter } = post
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <SearchBox selectedOperator={frontmatter.operator} />
      <div className="mx-auto w-11/12 lg:w-8/12 py-6">
        <h1 className="text-center font-sans text-xl pb-3">
          This is the{' '}
          <span className="dark:text-primary-500 text-primary-700 font-medium text-3xl underline">
            {frontmatter.title}
          </span>{' '}
          operator
        </h1>
        <div
          className="md-body"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <DocAndPlay repl={frontmatter.repl} docs={frontmatter.docs} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        operator
        repl
        docs
      }
    }
  }
`

OperatorTemplate.propTypes = {
  data: PropTypes.any,
}

export default OperatorTemplate
