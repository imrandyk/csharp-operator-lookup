import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'
import { Helmet } from 'react-helmet'

import './layout.css'
import Header from './header'
import Footer from './footer'
import SEO from '../seo'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Lookup" />
      <Helmet>
        <script src={withPrefix('initialTheme.js')} type="text/javascript" />
      </Helmet>
      <div className="text-lg flex flex-col min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="relative flex-grow">
          <div className="absolute inset-0 dark:text-primary-500 text-primary-700 h-96 z-0 object-shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              role="img"
              aria-label="Green wave"
            >
              <path
                className="fill-current"
                d="M0,32L40,48C80,64,160,96,240,96C320,96,400,64,480,58.7C560,53,640,75,720,106.7C800,139,880,181,960,213.3C1040,245,1120,267,1200,234.7C1280,203,1360,117,1400,74.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              />
            </svg>
          </div>
          <main className="relative z-10 mx-6 min-h-96 lg:max-w-5xl lg:m-auto rounded-3xl p-6 dark:bg-black bg-white dark:text-white text-black dark:shadow-primary-md shadow-md transition-colors">
            <div>{children}</div>
          </main>
        </div>
        <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
